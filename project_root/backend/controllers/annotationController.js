const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// corresponds to /image/annotation/
const createAnnotation = async (req, res) => {
    try {
        const { imageId, label, x, y, width, height, color } = req.body;

        if (!imageId || !label || x === undefined || y === undefined || width === undefined || height === undefined) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const image = await prisma.image.findUnique({
            where: { id: parseInt(imageId) }
        });

        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }

        if (image.userId !== req.user.id && !['cashier', 'manager', 'admin'].includes(req.user.role)) {
            return res.status(403).json({ error: 'Access denied' });
        }

        const annotation = await prisma.annotation.create({
            data: {
                imageId: parseInt(imageId),
                userId: req.user.id,
                label: label.trim(),
                x: parseFloat(x),
                y: parseFloat(y),
                width: parseFloat(width),
                height: parseFloat(height),
                color: color || '#ff0000'
            }
        });

        res.status(201).json({
            message: 'Annotation created successfully',
            annotation
        });
    } catch (error) {
        console.error('Create annotation error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// corresponds to /image/annotation/bulk
const createBulkAnnotations = async (req, res) => {
    try {
        const { imageId, annotations } = req.body;

        if (!imageId || !Array.isArray(annotations) || annotations.length === 0) {
            return res.status(400).json({ error: 'Invalid request: imageId and annotations array required' });
        }

        const image = await prisma.image.findUnique({
            where: { id: parseInt(imageId) }
        });

        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }

        if (image.userId !== req.user.id && !['cashier', 'manager', 'admin'].includes(req.user.role)) {
            return res.status(403).json({ error: 'Access denied' });
        }

        const annotationsData = annotations.map(ann => ({
            imageId: parseInt(imageId),
            userId: req.user.id,
            label: ann.label.trim(),
            x: parseFloat(ann.x),
            y: parseFloat(ann.y),
            width: parseFloat(ann.width),
            height: parseFloat(ann.height),
            color: ann.color || '#ff0000'
        }));

        const created = await prisma.annotation.createMany({
            data: annotationsData
        });

        res.status(201).json({
            message: `${created.count} annotations created successfully`,
            count: created.count
        });
    } catch (error) {
        console.error('Create bulk annotations error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// corresponds to PATCH /image/annotation/:id
const updateAnnotation = async (req, res) => {
    try {
        const { id } = req.params;
        const { label, x, y, width, height, color } = req.body;

        const annotation = await prisma.annotation.findUnique({
            where: { id: parseInt(id) },
            include: { image: true }
        });

        if (!annotation) {
            return res.status(404).json({ error: 'Annotation not found' });
        }

        if (annotation.userId !== req.user.id && !['cashier', 'manager', 'admin'].includes(req.user.role)) {
            return res.status(403).json({ error: 'Access denied' });
        }

        const updateData = {};
        if (label !== undefined) updateData.label = label.trim();
        if (x !== undefined) updateData.x = parseFloat(x);
        if (y !== undefined) updateData.y = parseFloat(y);
        if (width !== undefined) updateData.width = parseFloat(width);
        if (height !== undefined) updateData.height = parseFloat(height);
        if (color !== undefined) updateData.color = color;

        const updated = await prisma.annotation.update({
            where: { id: parseInt(id) },
            data: updateData
        });

        res.status(200).json({
            message: 'Annotation updated successfully',
            annotation: updated
        });
    } catch (error) {
        console.error('Update annotation error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// corresponds to DELETE image/annotation/:id
const deleteAnnotation = async (req, res) => {
    try {
        const { id } = req.params;

        const annotation = await prisma.annotation.findUnique({
            where: { id: parseInt(id) }
        });

        if (!annotation) {
            return res.status(404).json({ error: 'Annotation not found' });
        }

        if (annotation.userId !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Access denied' });
        }

        await prisma.annotation.delete({
            where: { id: parseInt(id) }
        });

        res.status(200).json({ message: 'Annotation deleted successfully' });
    } catch (error) {
        console.error('Delete annotation error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get annotations for image, as well as some info about the user --- Corresponds to GET /image/annotation/:imageId/annotations
const getImageAnnotations = async (req, res) => {
    try {
        const { imageId } = req.params;

        const image = await prisma.image.findUnique({
            where: { id: parseInt(imageId) }
        });

        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }

        // TODO: Add checks, currently any user can just get any annotation from any image

        if (image.userId !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Access denied' });
        }

        const annotations = await prisma.annotation.findMany({
            where: { imageId: parseInt(imageId) },
            include: {
                user: {
                    select: { id: true, name: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });

        res.status(200).json(annotations);
    } catch (error) {
        console.error('Get image annotations error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Validate annotation (cashier+) -- corresponds to /image/annotation/:id/validate
const validateAnnotation = async (req, res) => {
    try {
        const { id } = req.params; // id of the annotation
        const { isValidated } = req.body;

        if (typeof isValidated !== 'boolean') {
            return res.status(400).json({ error: 'isValidated must be a boolean' });
        }

        const annotation = await prisma.annotation.findUnique({
            where: { id: parseInt(id) }
        });

        if (!annotation) {
            return res.status(404).json({ error: 'Annotation not found' });
        }

        const updated = await prisma.annotation.update({
            where: { id: parseInt(id) },
            data: { isValidated }
        });

        res.status(200).json({
            message: 'Annotation validation updated',
            annotation: updated
        });
    } catch (error) {
        console.error('Validate annotation error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// controllers/annotationController
module.exports = {
    createAnnotation,
    createBulkAnnotations,
    updateAnnotation,
    deleteAnnotation,
    getImageAnnotations,
    validateAnnotation
};