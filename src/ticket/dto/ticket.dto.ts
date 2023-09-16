import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CLOCK_STATUS } from '../interfaces/ticket.interfaces';

export const TICKET_MODULES = [
  'incident',
  'servicerequest',
  'meeting',
  'provision',
  'access',
  'vehicle',
  'changerequest',
];

class TicketDto {
  // Common fields with SLA
  // id: number;

  @ApiProperty()
  ticket_id: string;

  @ApiProperty({ enum: TICKET_MODULES })
  ticket_module: string;

  @ApiProperty()
  ticket_id_old: string;

  @ApiProperty()
  ticket_name_old: string;

  @ApiProperty()
  technical_engineer: string;

  @ApiProperty()
  engineer_team: string;

  // @ApiProperty()
  // client_id: string;

  @ApiProperty()
  client: string;

  @ApiProperty()
  lastmodifiedby_id: number;

  @ApiProperty()
  coordinator_id: number;

  @ApiProperty()
  open_datetime: Date;

  @ApiProperty()
  ticket_department: string;

  @ApiProperty()
  it_engineer_remark: string;

  @ApiProperty()
  assigned_date: Date;

  @ApiProperty()
  autosignoff_date: Date;

  @ApiProperty()
  ticket_closed_datetime: Date;

  @ApiProperty()
  ticket_status: string;

  @ApiProperty()
  ticket_updatecount: number;

  @ApiProperty()
  reassigned_count: number;

  @ApiProperty()
  hasapproved_signoff_request: boolean;

  @ApiProperty()
  report_state: 'OPEN' | 'CLOSED';

  @ApiProperty()
  internal_remark: string;

  @ApiProperty()
  client_comment: string;

  @ApiProperty({ default: false })
  deletion_flag: boolean;

  @ApiProperty()
  coordinator: string;

  @ApiProperty()
  first_engineer: string;

  @ApiProperty()
  engineer2: string;

  @ApiProperty()
  engineer3: string;

  // SLA related
  @ApiProperty()
  ticket_clock_status: CLOCK_STATUS;

  @ApiProperty()
  due_date: Date;

  @ApiProperty()
  priority: string;

  @ApiProperty()
  category: string;

  // Frequently involved
  @ApiProperty()
  closure_code: 'CANCELLED' | 'SUCCESSFUL';

  @ApiProperty()
  incident_description: string;

  @ApiProperty()
  incident_resolution: string;

  @ApiProperty()
  engineer_remark_in_srf: string;

  @ApiProperty()
  first_engineer_id: number;

  @ApiProperty()
  timetoclose: number;

  @ApiProperty()
  ticket_state: boolean;

  @ApiProperty()
  is_sub_task: boolean;

  // SRF
  @ApiProperty()
  srf_approval_status: string;

  @ApiProperty()
  srf_submitapproval_date_eng_hod_2: Date;

  @ApiProperty()
  srf_submitapproval_date_iteng_hot_2: Date;

  @ApiProperty()
  srf_submitapproval_date_rpt_mgr_2: Date;

  @ApiProperty()
  srf_has_submitapproval_eng_hod: boolean;

  @ApiProperty()
  srf_has_submitapproval_iteng_hot: boolean;

  @ApiProperty()
  srf_has_submitapproval_reporting_manager: boolean;

  @ApiProperty()
  first_submission_date: Date;

  @ApiProperty()
  srf_engineering_hot_id: number;

  @ApiProperty()
  engineering_hot: string;

  @ApiProperty()
  srf_engineering_hod_id: number;

  @ApiProperty()
  engineering_hod: string;

  @ApiProperty()
  it_hot: string;

  @ApiProperty()
  srf_it_hot_id: number;

  @ApiProperty()
  srf_department: string;

  @ApiProperty()
  srf_category: string;

  @ApiProperty()
  srf_engineeringteam: string;

  // Assets
  @ApiProperty()
  asset_class: string;

  @ApiProperty()
  asset_number: string;

  @ApiProperty()
  asset_belonging: string;

  @ApiProperty()
  asset_old_asset_number: string;

  @ApiProperty()
  factory_finance_approval: 'APPROVED' | 'REJECTED' | 'CLARIFICATION';

  @ApiProperty()
  factory_finance_comment: string;

  @ApiProperty()
  evaluationgroup: string;

  // Laptop
  @ApiProperty()
  owner_name: string;

  @ApiProperty()
  nonlisted_laptopprice: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  factory_hof_approval: 'REJECTED' | 'APPROVED';

  @ApiProperty()
  hq_finance_approval: 'REJECTED' | 'APPROVED';

  @ApiProperty()
  hq_finance_comment: string;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  rating_for_requestor_enduser: number;

  // request_item_fml: string;
  @ApiProperty()
  request_signoff_date: Date;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  // factory_hof_id: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  // factory_finance_id: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  // hq_finance_id: string;

  // Service Request
  // requestcategory: string;
  @ApiProperty()
  sr_isautoclosed: boolean;

  @ApiProperty()
  sr_autorejection_date: Date;

  @ApiProperty()
  is_system_closed: boolean;

  @ApiProperty()
  time_spent: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  unit_price: number;

  @ApiProperty()
  expected_delivery_date: string;

  // Provision
  @ApiProperty()
  application_type: 'Add New' | 'Change';

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  position: string;

  @ApiProperty()
  badge_no: string;

  @ApiProperty()
  ext_no: string;

  @ApiProperty()
  mobile_phone: string;

  @ApiProperty()
  factory: string;

  @ApiProperty()
  actual_work_station: string;

  @ApiProperty()
  join_date: string;

  @ApiProperty()
  end_date: boolean;

  @ApiProperty()
  need_tgnas: boolean;

  @ApiProperty()
  need_email: boolean;

  @ApiProperty()
  need_erp: boolean;

  @ApiProperty()
  need_vpn: boolean;

  @ApiProperty()
  manager_hod_hof: string;

  @ApiProperty()
  department: string;

  // approval
  @ApiProperty({ enum: ['APPROVED', 'REJECTED'] })
  hod_approval: string;

  @ApiProperty({ enum: ['APPROVED', 'REJECTED'] })
  hof_approval: string;

  @ApiProperty()
  main_ticket_id: number;

  // Laptop
  @ApiProperty()
  costing_rm: number;

  @ApiProperty()
  is_firstlevel_support: boolean;

  @ApiProperty()
  sap_costcenter: string;

  // general FK
  @ApiProperty()
  parent_category: string;

  @ApiProperty()
  category_type: string;

  // Access Permission
  @ApiProperty()
  sr_category: string;

  @ApiProperty()
  onbehalf_user: string;

  @ApiProperty()
  hod_hof: string;

  @ApiProperty({ enum: ['READ ONLY', 'READ & WRITE', 'FULL ACCESS'] })
  permission: string;

  @ApiProperty()
  tgnas_path: string;

  @ApiProperty()
  factory_location: string;

  @ApiProperty()
  folder_name: string;

  @ApiProperty()
  new_existing_folder: string;

  @ApiProperty()
  access_type: 'PERMANENT' | 'TEMPORARY';

  @ApiProperty()
  location: string;

  @ApiProperty()
  vendor_email: string;

  @ApiProperty()
  printer_type: string;

  @ApiProperty()
  endpoint_type: string;

  @ApiProperty()
  reason: string;

  @ApiProperty()
  has_agreed_policy: boolean;

  @ApiProperty()
  location_dvr_ipaddress: string;

  @ApiProperty()
  start_date: string;

  @ApiProperty()
  // end_date: string;
  @ApiProperty()
  access_change: 'ADD ACCESS' | 'REMOVE ACCESS';

  @ApiProperty()
  vendor_name: string;

  @ApiProperty()
  group_email_not_in_list: string;

  @ApiProperty()
  member_list: string;

  @ApiProperty()
  vehicle_plate_no: string;

  @ApiProperty()
  to_extract_report: boolean;

  @ApiProperty()
  server_ip_name: string;

  @ApiProperty()
  email_id: string;

  @ApiProperty()
  computer_name: string;

  // Meeting
  @ApiProperty()
  subject: string;

  @ApiProperty()
  meeting_start_datetime: Date;

  @ApiProperty()
  meeting_end_datetime: Date;

  @ApiProperty()
  venue: string;

  @ApiProperty()
  is_involved_ts: boolean;

  @ApiProperty()
  hp_number: string;

  @ApiProperty()
  meeting_remark: string;

  @ApiProperty()
  language: string;

  @ApiProperty()
  meeting_type: string;

  // Vehicle
  @ApiProperty()
  contact_number_1: string;

  @ApiProperty()
  contact_number_2: string;

  @ApiProperty()
  costing: number;

  @ApiProperty()
  dismantle_purpose: string;

  @ApiProperty()
  material_group: string;

  @ApiProperty()
  other_vehicle_type: string;

  @ApiProperty()
  category_affected: string;

  @ApiProperty({ enum: ['NEW INSTALLATION', 'DISMANTLE'] })
  vehicle_information: string;

  @ApiProperty()
  vehicle_plate_number: string;

  @ApiProperty()
  with_fuel_sensor: boolean;

  @ApiProperty()
  createdby_id: number;

  @ApiProperty()
  vehicle_department_id: number;

  // owner_id: number;
  @ApiProperty()
  pic_1_id: number;

  @ApiProperty()
  pic_2_id: number;

  @ApiProperty()
  vehicle_type: string;

  // Change Request
  @ApiProperty()
  actual_start_date: Date;

  @ApiProperty()
  actual_end_date: Date;

  @ApiProperty()
  change_description: string;

  @ApiProperty()
  close_comments: string;

  @ApiProperty()
  closed_datetime: Date;

  @ApiProperty()
  attachment_no: number;

  @ApiProperty()
  reason_for_change: string;

  @ApiProperty()
  review_comments_details: string;

  @ApiProperty()
  review_date: Date;

  @ApiProperty()
  roll_out_plan_details: string;

  @ApiProperty()
  scheduled_start_date: Date;

  @ApiProperty()
  scheduled_end_date: Date;

  @ApiProperty()
  update_count: number;

  @ApiProperty()
  close_code: string;

  @ApiProperty()
  completion_note: string;

  @ApiProperty()
  roll_back_plan_details: string;

  @ApiProperty()
  server_name: string;

  @ApiProperty()
  is_emergency: boolean;

  @ApiProperty()
  changerequest_category: string;

  @ApiProperty()
  onbehalf_user_id: number;

  ///
  @ApiProperty()
  owner_badge_id: string;

  // IR 4.0 projects
  @ApiProperty()
  project_title: string;

  @ApiProperty()
  is_abort: boolean;

  @ApiProperty()
  data_storage_location: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  impact_if_not_change: string;

  @ApiProperty()
  purpose: string;

  @ApiProperty()
  remark: string;

  @ApiProperty()
  is_tsm: boolean;

  @ApiProperty()
  factory_: string;

  @ApiProperty()
  project_scope: string;

  @ApiProperty()
  bpo_subcategory: string;

  @ApiProperty()
  sme_category: string;

  @ApiProperty()
  fac_code: string;

  @ApiProperty()
  hof1_id: number;

  @ApiProperty()
  hof2_id: number;

  @ApiProperty()
  jmc_id: number;

  @ApiProperty()
  bpo_approver_id: number;

  @ApiProperty()
  pmo_approver_id: number;

  @ApiProperty()
  sme_approver_id: number;

  @ApiProperty()
  pmo_approver: string;

  @ApiProperty()
  @ApiProperty()
  // Article
  @ApiProperty()
  is_draft: boolean;

  @ApiProperty()
  @ApiProperty()
  // Cloud
  @ApiProperty()
  project_name: string;

  @ApiProperty()
  api_name: string;

  @ApiProperty()
  email_address: string;

  @ApiProperty()
  has_process_access: boolean;

  @ApiProperty()
  owner_list: string;

  @ApiProperty()
  editor_list: string;

  @ApiProperty()
  viewer_list: string;

  @ApiProperty()
  dashboard_name: string;

  @ApiProperty()
  custom_frequency: string;

  @ApiProperty()
  recipient_list: string;

  @ApiProperty()
  sender_email_address: string;

  @ApiProperty()
  recipient_email_address: string;

  @ApiProperty()
  email_subject: string;

  @ApiProperty()
  date_and_time: Date;

  @ApiProperty()
  is_incur_cost: boolean;

  @ApiProperty()
  monthly_estimated_cost: number;

  @ApiProperty()
  cloud_service_provider: string;

  @ApiProperty()
  it_hot_id: number;

  @ApiProperty()
  it_hod_id: number;

  // Contract
  @ApiProperty()
  expiry_date: string;

  @ApiProperty()
  hostname: string;

  @ApiProperty()
  product_name: string;

  @ApiProperty()
  serial_no: string;

  @ApiProperty()
  total_cost: number;

  @ApiProperty()
  vendor_pic: string;

  @ApiProperty()
  personincharge_id: number;

  @ApiProperty()
  personincharge: string;

  @ApiProperty()
  contract_type: string;

  // CMDB
  @ApiProperty()
  serial_number: string;

  // UARF
  @ApiProperty()
  has_acknowledge: boolean;

  @ApiProperty()
  is_auto_acknowledge: boolean;

  @ApiProperty()
  is_form_cancelled: boolean;

  @ApiProperty()
  it_action_complete_date: string;

  @ApiProperty()
  it_comment: string;

  @ApiProperty()
  staff_job_grade: string;

  @ApiProperty()
  staff_join_date: string;

  @ApiProperty()
  has_missing_thing: boolean;

  @ApiProperty()
  purchase_or_get_from_staff: 'PURCHASE' | 'GET FROM STAFF' | 'N/A';

  @ApiProperty()
  reason_of_cancellation: string;

  @ApiProperty()
  resign_date: string;

  @ApiProperty()
  has_staff_acknowledge: boolean;

  @ApiProperty()
  has_terms_and_condition: boolean;

  @ApiProperty()
  staff_id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  cmdb_id: number;

  @ApiProperty()
  staff: string;

  // Current Approver
  @ApiProperty()
  current_approvers: string[];
}

export class CreateTicketDto extends PartialType(TicketDto) {}

export class UpdateTicketDto extends PartialType(TicketDto) {}
