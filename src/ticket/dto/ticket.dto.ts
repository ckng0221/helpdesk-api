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

  ticket_id: string;

  @ApiProperty({ enum: TICKET_MODULES })
  ticket_module: string;

  ticket_id_old: string;

  ticket_name_old: string;

  technical_engineer: string;

  engineer_team: string;

  //
  // client_id: string;

  client: string;

  lastmodifiedby_id: number;

  coordinator_id: number;

  open_datetime: Date;

  ticket_department: string;

  it_engineer_remark: string;

  assigned_date: Date;

  autosignoff_date: Date;

  ticket_closed_datetime: Date;

  ticket_status: string;

  ticket_updatecount: number;

  reassigned_count: number;

  hasapproved_signoff_request: boolean;

  report_state: 'OPEN' | 'CLOSED';

  internal_remark: string;

  client_comment: string;

  @ApiProperty({ default: false })
  deletion_flag: boolean;

  coordinator: string;

  first_engineer: string;

  engineer2: string;

  engineer3: string;

  // SLA related

  ticket_clock_status: CLOCK_STATUS;

  due_date: Date;

  priority: string;

  category: string;

  // Frequently involved

  closure_code: 'CANCELLED' | 'SUCCESSFUL';

  incident_description: string;

  incident_resolution: string;

  engineer_remark_in_srf: string;

  first_engineer_id: number;

  timetoclose: number;

  ticket_state: boolean;

  is_sub_task: boolean;

  // SRF

  srf_approval_status: string;

  srf_submitapproval_date_eng_hod_2: Date;

  srf_submitapproval_date_iteng_hot_2: Date;

  srf_submitapproval_date_rpt_mgr_2: Date;

  srf_has_submitapproval_eng_hod: boolean;

  srf_has_submitapproval_iteng_hot: boolean;

  srf_has_submitapproval_reporting_manager: boolean;

  first_submission_date: Date;

  srf_engineering_hot_id: number;

  engineering_hot: string;

  srf_engineering_hod_id: number;

  engineering_hod: string;

  it_hot: string;

  srf_it_hot_id: number;

  srf_department: string;

  srf_category: string;

  srf_engineeringteam: string;

  // Assets

  asset_class: string;

  asset_number: string;

  asset_belonging: string;

  asset_old_asset_number: string;

  factory_finance_approval: 'APPROVED' | 'REJECTED' | 'CLARIFICATION';

  factory_finance_comment: string;

  evaluationgroup: string;

  // Laptop

  owner_name: string;

  nonlisted_laptopprice: number;

  quantity: number;

  factory_hof_approval: 'REJECTED' | 'APPROVED';

  hq_finance_approval: 'REJECTED' | 'APPROVED';

  hq_finance_comment: string;

  rating: number;

  rating_for_requestor_enduser: number;

  // request_item_fml: string;

  request_signoff_date: Date;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  // factory_hof_id: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  // factory_finance_id: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  // hq_finance_id: string;

  // Service Request
  // requestcategory: string;

  sr_isautoclosed: boolean;

  sr_autorejection_date: Date;

  is_system_closed: boolean;

  time_spent: number;

  total: number;

  unit_price: number;

  expected_delivery_date: string;

  // Provision

  application_type: 'Add New' | 'Change';

  full_name: string;

  position: string;

  badge_no: string;

  ext_no: string;

  mobile_phone: string;

  factory: string;

  actual_work_station: string;

  join_date: string;

  end_date: boolean;

  need_tgnas: boolean;

  need_email: boolean;

  need_erp: boolean;

  need_vpn: boolean;

  manager_hod_hof: string;

  department: string;

  // approval
  @ApiProperty({ enum: ['APPROVED', 'REJECTED'] })
  hod_approval: string;

  @ApiProperty({ enum: ['APPROVED', 'REJECTED'] })
  hof_approval: string;

  main_ticket_id: number;

  // Laptop

  costing_rm: number;

  is_firstlevel_support: boolean;

  sap_costcenter: string;

  // general FK

  parent_category: string;

  category_type: string;

  // Access Permission

  sr_category: string;

  onbehalf_user: string;

  hod_hof: string;

  @ApiProperty({ enum: ['READ ONLY', 'READ & WRITE', 'FULL ACCESS'] })
  permission: string;

  tgnas_path: string;

  factory_location: string;

  folder_name: string;

  new_existing_folder: string;

  access_type: 'PERMANENT' | 'TEMPORARY';

  location: string;

  vendor_email: string;

  printer_type: string;

  endpoint_type: string;

  reason: string;

  has_agreed_policy: boolean;

  location_dvr_ipaddress: string;

  start_date: string;

  // end_date: string;

  access_change: 'ADD ACCESS' | 'REMOVE ACCESS';

  vendor_name: string;

  group_email_not_in_list: string;

  member_list: string;

  vehicle_plate_no: string;

  to_extract_report: boolean;

  server_ip_name: string;

  email_id: string;

  computer_name: string;

  // Meeting

  subject: string;

  meeting_start_datetime: Date;

  meeting_end_datetime: Date;

  venue: string;

  is_involved_ts: boolean;

  hp_number: string;

  meeting_remark: string;

  language: string;

  meeting_type: string;

  // Vehicle

  contact_number_1: string;

  contact_number_2: string;

  costing: number;

  dismantle_purpose: string;

  material_group: string;

  other_vehicle_type: string;

  category_affected: string;

  @ApiProperty({ enum: ['NEW INSTALLATION', 'DISMANTLE'] })
  vehicle_information: string;

  vehicle_plate_number: string;

  with_fuel_sensor: boolean;

  createdby_id: number;

  vehicle_department_id: number;

  // owner_id: number;

  pic_1_id: number;

  pic_2_id: number;

  vehicle_type: string;

  // Change Request

  actual_start_date: Date;

  actual_end_date: Date;

  change_description: string;

  close_comments: string;

  closed_datetime: Date;

  attachment_no: number;

  reason_for_change: string;

  review_comments_details: string;

  review_date: Date;

  roll_out_plan_details: string;

  scheduled_start_date: Date;

  scheduled_end_date: Date;

  update_count: number;

  close_code: string;

  completion_note: string;

  roll_back_plan_details: string;

  server_name: string;

  is_emergency: boolean;

  changerequest_category: string;

  onbehalf_user_id: number;

  ///

  owner_badge_id: string;

  // IR 4.0 projects

  project_title: string;

  is_abort: boolean;

  data_storage_location: string;

  description: string;

  impact_if_not_change: string;

  purpose: string;

  remark: string;

  is_tsm: boolean;

  factory_: string;

  project_scope: string;

  bpo_subcategory: string;

  sme_category: string;

  fac_code: string;

  hof1_id: number;

  hof2_id: number;

  jmc_id: number;

  bpo_approver_id: number;

  pmo_approver_id: number;

  sme_approver_id: number;

  pmo_approver: string;

  // Article

  is_draft: boolean;

  // Cloud

  project_name: string;

  api_name: string;

  email_address: string;

  has_process_access: boolean;

  owner_list: string;

  editor_list: string;

  viewer_list: string;

  dashboard_name: string;

  custom_frequency: string;

  recipient_list: string;

  sender_email_address: string;

  recipient_email_address: string;

  email_subject: string;

  date_and_time: Date;

  is_incur_cost: boolean;

  monthly_estimated_cost: number;

  cloud_service_provider: string;

  it_hot_id: number;

  it_hod_id: number;

  // Contract

  expiry_date: string;

  hostname: string;

  product_name: string;

  serial_no: string;

  total_cost: number;

  vendor_pic: string;

  personincharge_id: number;

  personincharge: string;

  contract_type: string;

  // CMDB

  serial_number: string;

  // UARF

  has_acknowledge: boolean;

  is_auto_acknowledge: boolean;

  is_form_cancelled: boolean;

  it_action_complete_date: string;

  it_comment: string;

  staff_job_grade: string;

  staff_join_date: string;

  has_missing_thing: boolean;

  purchase_or_get_from_staff: 'PURCHASE' | 'GET FROM STAFF' | 'N/A';

  reason_of_cancellation: string;

  resign_date: string;

  has_staff_acknowledge: boolean;

  has_terms_and_condition: boolean;

  staff_id: number;

  name: string;

  cmdb_id: number;

  staff: string;

  // Current Approver

  current_approvers: string[];
}

export class CreateTicketDto extends PartialType(TicketDto) {}

export class UpdateTicketDto extends PartialType(TicketDto) {}
