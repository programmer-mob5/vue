export default interface UserData {
  _id: string;
  company: string;
  companyName: string;
  companyCode: string;
  firstName: string;
  lastName: string;
  fullName: string;
  userType: string;
  isActive: boolean;
  profilePictureMedium: string;
  profilePictureBig: string;
  profilePictureSmall: string;
  email: string;
  phoneNumber: string;
  employeeId: string;
  position: string;
  token: string;
  transactionRoles: TransactionRoles;
  systemRoles: SystemRoles;
  generalSetting: GeneralSetting;
  addOn: AddOn;
}

interface TransactionRoles {
  trackingRole: RolePermissions;
  disposalRole: RolePermissions;
  borrowingRole: RolePermissions;
  transferRole: RolePermissions;
  auditRole: RolePermissions;
  repairRole: RolePermissions;
  maintenanceRole: RolePermissions;
}

interface RolePermissions {
  manager: boolean;
  monitoringReport: boolean;
  staff: boolean;
  approver: boolean;
}

interface SystemRoles {
  importData: RoleActions;
  assetAttribute: RoleActions;
  assetPolicies: RoleActions;
  depreciationGroup: RoleActions;
  depreciationMethod: RoleActions;
  documentDeletion: RoleActions;
  group: RoleActions;
  user: RoleActions;
  iotReader: RoleActions;
  license: RoleActions;
  purchaseDocument: RoleActions;
  purchaseInformation: RoleActions;
  role: RoleActions;
  tag: RoleActions;
  tagType: RoleActions;
  openApi: RoleActions;
  registerAsset: RoleActions;
}

interface RoleActions {
  create: boolean;
  view: boolean;
  update: boolean;
  delete: boolean;
}

interface GeneralSetting {
  currency: Currency;
  timezone: string;
  dateFormat: DateFormat;
  timeFormat: boolean;
}

interface Currency {
  currency: string;
  symbol: string;
  locale: string;
  label: string;
  _id: string;
  id: string;
}

interface DateFormat {
  locale: string;
  year: string;
  month: string;
  day: string;
}

interface AddOn {
  maintenance: boolean;
  tracking: boolean;
  audit: boolean;
  repairTicketing: boolean;
}
