// utils/annotationUtils.js
// Coordinate system conversion utilities for annotations

/**
 * Annotation Coordinate Systems:
 * 
 * 1. ABSOLUTE (pixels): Used for canvas drawing and storage
 *    - x, y: Top-left corner in pixels
 *    - width, height: Dimensions in pixels
 * 
 * 2. NORMALIZED (0-1): Used for ML model training
 *    - x, y: Center of box as percentage (0.0 to 1.0)
 *    - width, height: Dimensions as percentage (0.0 to 1.0)
 * 
 * 3. YOLO Format: Normalized with center coordinates
 *    - x_center, y_center, width, height (all 0-1)
 * 
 * 4. COCO Format: Absolute with top-left coordinates
 *    - x, y (top-left), width, height (all in pixels)
 */

// Convert absolute pixels to normalized (0-1) coordinates
// For ML training - center-based


const absoluteToNormalized = (annotation, imageWidth, imageHeight) => {
    const centerX = (annotation.x + annotation.width / 2) / imageWidth;
    const centerY = (annotation.y + annotation.height / 2) / imageHeight;
    const normWidth = annotation.width / imageWidth;
    const normHeight = annotation.height / imageHeight;
    
    return {
        x: centerX,
        y: centerY,
        width: normWidth,
        height: normHeight,
        label: annotation.label
    };
};

// Convert normalized (0-1) to absolute pixels
// For displaying on canvas
const normalizedToAbsolute = (annotation, imageWidth, imageHeight) => {
    const width = annotation.width * imageWidth;
    const height = annotation.height * imageHeight;
    const x = (annotation.x * imageWidth) - (width / 2);
    const y = (annotation.y * imageHeight) - (height / 2);
    
    return {
        x,
        y,
        width,
        height,
        label: annotation.label
    };
};

// Convert to YOLO format (class_id x_center y_center width height)
// All values normalized 0-1, space-separated
const toYOLOFormat = (annotation, imageWidth, imageHeight, classMap) => {
    const classId = classMap[annotation.label] || 0;
    const normalized = absoluteToNormalized(annotation, imageWidth, imageHeight);
    
    return `${classId} ${normalized.x.toFixed(6)} ${normalized.y.toFixed(6)} ${normalized.width.toFixed(6)} ${normalized.height.toFixed(6)}`;
};

// Convert to COCO format (JSON)
const toCOCOFormat = (annotation, imageId, annotationId, categoryId) => {
    return {
        id: annotationId,
        image_id: imageId,
        category_id: categoryId,
        bbox: [
            annotation.x,
            annotation.y,
            annotation.width,
            annotation.height
        ],
        area: annotation.width * annotation.height,
        iscrowd: 0,
        segmentation: []
    };
};

// Convert to Pascal VOC format (XML-ready object)
const toPascalVOCFormat = (annotation) => {
    return {
        name: annotation.label,
        bndbox: {
            xmin: Math.round(annotation.x),
            ymin: Math.round(annotation.y),
            xmax: Math.round(annotation.x + annotation.width),
            ymax: Math.round(annotation.y + annotation.height)
        },
        difficult: 0,
        truncated: 0
    };
};

// Validate annotation coordinates
const validateAnnotation = (annotation, imageWidth, imageHeight) => {
    const errors = [];
    
    if (annotation.x < 0 || annotation.x > imageWidth) {
        errors.push(`Invalid x coordinate: ${annotation.x} (image width: ${imageWidth})`);
    }
    if (annotation.y < 0 || annotation.y > imageHeight) {
        errors.push(`Invalid y coordinate: ${annotation.y} (image height: ${imageHeight})`);
    }
    if (annotation.width <= 0 || annotation.x + annotation.width > imageWidth) {
        errors.push(`Invalid width: ${annotation.width}`);
    }
    if (annotation.height <= 0 || annotation.y + annotation.height > imageHeight) {
        errors.push(`Invalid height: ${annotation.height}`);
    }
    
    return {
        valid: errors.length === 0,
        errors
    };
};

// Clamp annotation to image boundaries
const clampAnnotation = (annotation, imageWidth, imageHeight) => {
    return {
        ...annotation,
        x: Math.max(0, Math.min(annotation.x, imageWidth - 1)),
        y: Math.max(0, Math.min(annotation.y, imageHeight - 1)),
        width: Math.min(annotation.width, imageWidth - annotation.x),
        height: Math.min(annotation.height, imageHeight - annotation.y)
    };
};

// Calculate IoU (Intersection over Union) between two boxes
const calculateIoU = (box1, box2) => {
    const x1 = Math.max(box1.x, box2.x);
    const y1 = Math.max(box1.y, box2.y);
    const x2 = Math.min(box1.x + box1.width, box2.x + box2.width);
    const y2 = Math.min(box1.y + box1.height, box2.y + box2.height);
    
    if (x2 < x1 || y2 < y1) return 0;
    
    const intersection = (x2 - x1) * (y2 - y1);
    const area1 = box1.width * box1.height;
    const area2 = box2.width * box2.height;
    const union = area1 + area2 - intersection;
    
    return intersection / union;
};

// Export dataset in multiple formats
const exportDataset = (images, format = 'yolo') => {
    switch (format.toLowerCase()) {
        case 'yolo':
            return exportYOLO(images);
        case 'coco':
            return exportCOCO(images);
        case 'voc':
        case 'pascal':
            return exportPascalVOC(images);
        default:
            throw new Error(`Unsupported format: ${format}`);
    }
};

// Export as YOLO format
const exportYOLO = (images) => {
    const classMap = buildClassMap(images);
    const files = {};
    
    // Create classes.txt
    files['classes.txt'] = Object.keys(classMap).join('\n');
    
    // Create annotation files for each image
    images.forEach(image => {
        const annotations = image.annotations || [];
        const lines = annotations.map(ann => 
            toYOLOFormat(ann, image.width, image.height, classMap)
        );
        files[`${image.id}.txt`] = lines.join('\n');
    });
    
    return { format: 'yolo', classMap, files };
};

// Export as COCO format
const exportCOCO = (images) => {
    const classMap = buildClassMap(images);
    const categories = Object.entries(classMap).map(([name, id]) => ({
        id,
        name,
        supercategory: 'object'
    }));
    
    const cocoImages = images.map((img, idx) => ({
        id: img.id,
        file_name: img.fileName,
        width: img.width,
        height: img.height,
        date_captured: img.uploadedAt
    }));
    
    let annotationId = 1;
    const cocoAnnotations = [];
    
    images.forEach(image => {
        (image.annotations || []).forEach(ann => {
            cocoAnnotations.push(
                toCOCOFormat(
                    ann,
                    image.id,
                    annotationId++,
                    classMap[ann.label]
                )
            );
        });
    });
    
    return {
        format: 'coco',
        data: {
            info: {
                description: 'Exported from Image Annotation Platform',
                version: '1.0',
                year: new Date().getFullYear(),
                date_created: new Date().toISOString()
            },
            images: cocoImages,
            annotations: cocoAnnotations,
            categories
        }
    };
};

// Export as Pascal VOC format
const exportPascalVOC = (images) => {
    const files = {};
    
    images.forEach(image => {
        const objects = (image.annotations || []).map(toPascalVOCFormat);
        
        const xml = {
            annotation: {
                folder: 'images',
                filename: image.fileName,
                size: {
                    width: image.width,
                    height: image.height,
                    depth: 3
                },
                object: objects
            }
        };
        
        files[`${image.id}.xml`] = xml;
    });
    
    return { format: 'pascal_voc', files };
};

// Build class map from images
const buildClassMap = (images) => {
    const labels = new Set();
    images.forEach(image => {
        (image.annotations || []).forEach(ann => {
            labels.add(ann.label);
        });
    });
    
    const classMap = {};
    Array.from(labels).sort().forEach((label, idx) => {
        classMap[label] = idx;
    });
    
    return classMap;
};

module.exports = {
    absoluteToNormalized,
    normalizedToAbsolute,
    toYOLOFormat,
    toCOCOFormat,
    toPascalVOCFormat,
    validateAnnotation,
    clampAnnotation,
    calculateIoU,
    exportDataset,
    exportYOLO,
    exportCOCO,
    exportPascalVOC
};