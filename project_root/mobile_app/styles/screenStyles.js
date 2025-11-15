// styles/screenStyles.js
import { StyleSheet, Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const colors = {
  primary: '#6366f1',
  primaryLight: '#c7d2fe',
  primaryDark: '#4f46e5',
  
  background: '#f0f4f8',
  white: '#ffffff',
  black: '#000000',
  
  text: '#1e293b',
  textLight: '#64748b',
  textLighter: '#94a3b8',
  
  success: '#10b981',
  successLight: '#dcfce7',
  successDark: '#166534',
  
  error: '#ef4444',
  errorLight: '#fee2e2',
  errorDark: '#991b1b',
  
  warning: '#f59e0b',
  warningLight: '#fef3c7',
  
  border: '#e2e8f0',
  borderLight: '#f8fafc',
};

// Home Screen Styles
export const homeStyles = StyleSheet.create({
  hero: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 60,
    paddingTop: 80,
    alignItems: 'center',
  },
  heroEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: colors.primaryLight,
    textAlign: 'center',
    marginBottom: 24,
  },
  ctaButton: {
    backgroundColor: colors.white,
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 24,
  },
  ctaButtonText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: '600',
  },
  statsContainer: {
    paddingHorizontal: 24,
    marginTop: -32,
  },
  statsCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
  },
  roleText: {
    fontSize: 20,
    textTransform: 'capitalize',
  },
  statLabel: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 4,
  },
  featureEmoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageItem: {
    width: (SCREEN_WIDTH - 48 - 16) / 2,
    marginBottom: 16,
  },
  exampleImage: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    marginBottom: 8,
  },
  imageTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  finalCTA: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
  },
  finalCTATitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    marginBottom: 8,
    textAlign: 'center',
  },
  finalCTASubtitle: {
    fontSize: 16,
    color: colors.primaryLight,
    marginBottom: 24,
    textAlign: 'center',
  },
});

// Profile Screen Styles
export const profileStyles = StyleSheet.create({
  profileEmoji: {
    fontSize: 48,
    textAlign: 'center',
    marginBottom: 16,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  detailLabel: {
    fontSize: 14,
    color: colors.textLight,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    textTransform: 'capitalize',
  },
  activeText: {
    color: colors.success,
  },
  logoutButton: {
    backgroundColor: colors.errorLight,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.error,
  },
  logoutText: {
    color: colors.error,
    fontSize: 18,
    fontWeight: '600',
  },
  authContainer: {
    paddingHorizontal: 24,
    paddingVertical: 48,
    paddingTop: 80,
  },
  authEmoji: {
    fontSize: 64,
    textAlign: 'center',
    marginBottom: 24,
  },
  switchModeButton: {
    paddingVertical: 16,
  },
});

// Annotate Screen Styles
export const annotateStyles = StyleSheet.create({
  uploadSection: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
  },
  uploadEmoji: {
    fontSize: 48,
    marginBottom: 16,
  },
  uploadTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 24,
  },
  imagePreview: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: SCREEN_WIDTH - 64,
    height: SCREEN_WIDTH - 64,
    borderRadius: 12,
    marginBottom: 12,
  },
  changeImageButton: {
    marginTop: 8,
  },
  changeImageText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  colorPicker: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  colorOption: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  colorOptionSelected: {
    borderColor: colors.text,
    borderWidth: 3,
  },
  annotationsList: {
    marginBottom: 16,
  },
  annotationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.borderLight,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  annotationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  colorDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  annotationLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  deleteButton: {
    padding: 4,
  },
  deleteText: {
    fontSize: 20,
  },
  saveButton: {
    backgroundColor: colors.success,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
  },
  saveButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
  noteBox: {
    backgroundColor: colors.warningLight,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: colors.warning,
  },
  noteText: {
    fontSize: 14,
    color: '#92400e',
    lineHeight: 20,
  },
});

// Organizations Screen Styles
export const organizationStyles = StyleSheet.create({
  backButton: {
    marginBottom: 16,
  },
  backText: {
    fontSize: 18,
    color: colors.white,
  },
  orgCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  orgName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  orgDescription: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 12,
  },
  orgFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  memberCount: {
    fontSize: 14,
    color: colors.textLight,
  },
  viewButton: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  memberCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  memberEmail: {
    fontSize: 14,
    color: colors.textLight,
  },
  roleBadge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  roleBadgeText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  modalButton: {
    flex: 1,
  },
  cancelButton: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cancelButtonText: {
    color: colors.text,
  },
});

// Cashier Screen Styles
export const cashierStyles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textLight,
  },
  tabTextActive: {
    color: colors.primary,
    fontWeight: '600',
  },
  imageCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  imageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  imageInfo: {
    flex: 1,
  },
  imageName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  uploaderName: {
    fontSize: 14,
    color: colors.textLight,
  },
  uploadDate: {
    fontSize: 12,
    color: colors.textLighter,
    marginTop: 4,
  },
  annotationBadge: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  annotationBadgeText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '600',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  mlButton: {
    backgroundColor: colors.borderLight,
    borderWidth: 1,
    borderColor: colors.border,
  },
  mlButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.text,
  },
  approveButton: {
    backgroundColor: colors.successLight,
  },
  approveButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.successDark,
  },
  rejectButton: {
    backgroundColor: colors.errorLight,
  },
  rejectButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.errorDark,
  },
  viewDetailsText: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  quickStats: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    marginTop: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  quickStatItem: {
    alignItems: 'center',
  },
  quickStatNumber: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  quickStatLabel: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 4,
  },
  pendingColor: {
    color: colors.primary,
  },
  approvedColor: {
    color: colors.success,
  },
  rejectedColor: {
    color: colors.error,
  },
});

// Image Detail Screen Styles
export const imageDetailStyles = StyleSheet.create({
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  statusApproved: {
    backgroundColor: colors.successLight,
  },
  statusRejected: {
    backgroundColor: colors.errorLight,
  },
  statusPending: {
    backgroundColor: colors.warningLight,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  infoCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  fileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  infoLabel: {
    fontSize: 14,
    color: colors.textLight,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  uploaderCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  uploaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploaderIcon: {
    backgroundColor: colors.primaryLight,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  uploaderIconText: {
    fontSize: 24,
  },
  uploaderName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  uploaderEmail: {
    fontSize: 14,
    color: colors.textLight,
  },
  annotationCard: {
    backgroundColor: colors.borderLight,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  annotationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  annotationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  colorDotSmall: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  annotationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  validatedBadge: {
    backgroundColor: colors.successLight,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  validatedText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.successDark,
  },
  annotationDetail: {
    fontSize: 14,
    color: colors.textLight,
    marginBottom: 4,
  },
  annotationCreator: {
    fontSize: 12,
    color: colors.textLighter,
    marginTop: 8,
  },
  verificationCard: {
    backgroundColor: colors.borderLight,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  verifierRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  verifierInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  verifierName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  verifierRole: {
    fontSize: 14,
    color: colors.textLight,
  },
  verificationBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  verificationBadgeValid: {
    backgroundColor: colors.successLight,
  },
  verificationBadgeInvalid: {
    backgroundColor: colors.errorLight,
  },
  verificationBadgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  verificationBadgeTextValid: {
    color: colors.successDark,
  },
  verificationBadgeTextInvalid: {
    color: colors.errorDark,
  },
  mlScore: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 4,
  },
  verificationNotes: {
    fontSize: 14,
    color: colors.textLight,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  verificationDate: {
    fontSize: 12,
    color: colors.textLighter,
  },
  pendingNotice: {
    backgroundColor: colors.warningLight,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.warning,
  },
  pendingNoticeText: {
    fontSize: 14,
    color: '#92400e',
    textAlign: 'center',
    fontWeight: '500',
  },
});

// Tab Bar Styles
export const tabBarStyles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingBottom: 20,
    paddingTop: 10,
    height: 80,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
  },
  tabLabelActive: {
    color: colors.primary,
    fontWeight: '600',
  },
  tabLabelInactive: {
    color: colors.textLight,
  },
});

export {SCREEN_WIDTH};