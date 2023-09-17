import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { CLOCK_STATUS } from '../interfaces/ticket.interfaces';
import { TICKET_MODULES } from '../dto/ticket.dto';
export type TicketDocument = HydratedDocument<Ticket>;

@Schema({
  timestamps: { createdAt: 'open_datetime', updatedAt: 'lastmodified_date' },
})
export class Ticket {
  // Common fields with SLA
  id_: mongoose.Types.ObjectId;

  @Prop()
  ticket_id: string;

  @Prop({ enum: TICKET_MODULES })
  ticket_module: string;

  @Prop()
  ticket_id_old: string;

  @Prop()
  ticket_name_old: string;

  @Prop()
  technical_engineer: string;

  @Prop()
  engineer_team: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  client_id: string;

  @Prop()
  client: string;

  @Prop()
  lastmodifiedby_id: number;

  @Prop()
  coordinator_id: number;

  @Prop()
  open_datetime: Date;

  @Prop()
  ticket_department: string;

  @Prop()
  it_engineer_remark: string;

  @Prop()
  assigned_date: Date;

  @Prop()
  autosignoff_date: Date;

  @Prop()
  ticket_closed_datetime: Date;

  @Prop()
  ticket_status: string;

  @Prop()
  ticket_updatecount: number;

  @Prop({ type: Number, min: 0 })
  reassigned_count: number;

  @Prop()
  hasapproved_signoff_request: boolean;

  @Prop()
  report_state: 'OPEN' | 'CLOSED';

  @Prop()
  internal_remark: string;

  @Prop()
  client_comment: string;

  @Prop({ default: false })
  deletion_flag: boolean;

  @Prop()
  coordinator: string;

  @Prop()
  first_engineer: string;

  @Prop()
  engineer2: string;

  @Prop()
  engineer3: string;

  // SLA related
  @Prop()
  ticket_clock_status: CLOCK_STATUS;

  @Prop()
  due_date: Date;

  @Prop()
  priority: string;

  @Prop()
  category: string;

  // Frequently involved
  @Prop()
  closure_code: 'CANCELLED' | 'SUCCESSFUL';

  @Prop()
  incident_description: string;

  @Prop()
  incident_resolution: string;

  @Prop()
  engineer_remark_in_srf: string;

  @Prop()
  first_engineer_id: number;

  @Prop()
  timetoclose: number;

  @Prop()
  ticket_state: boolean;

  @Prop()
  is_sub_task: boolean;

  // SRF
  @Prop()
  srf_approval_status: string;

  @Prop()
  srf_submitapproval_date_eng_hod_2: Date;

  @Prop()
  srf_submitapproval_date_iteng_hot_2: Date;

  @Prop()
  srf_submitapproval_date_rpt_mgr_2: Date;

  @Prop()
  srf_has_submitapproval_eng_hod: boolean;

  @Prop()
  srf_has_submitapproval_iteng_hot: boolean;

  @Prop()
  srf_has_submitapproval_reporting_manager: boolean;

  @Prop()
  first_submission_date: Date;

  @Prop()
  srf_engineering_hot_id: number;

  @Prop()
  engineering_hot: string;

  @Prop()
  srf_engineering_hod_id: number;

  @Prop()
  engineering_hod: string;

  @Prop()
  it_hot: string;

  @Prop()
  srf_it_hot_id: number;

  @Prop()
  srf_department: string;

  @Prop()
  srf_category: string;

  @Prop()
  srf_engineeringteam: string;

  // Assets
  @Prop()
  asset_class: string;

  @Prop()
  asset_number: string;

  @Prop()
  asset_belonging: string;

  @Prop()
  asset_old_asset_number: string;

  @Prop()
  factory_finance_approval: 'APPROVED' | 'REJECTED' | 'CLARIFICATION';

  @Prop()
  factory_finance_comment: string;

  @Prop()
  evaluationgroup: string;

  // Laptop
  @Prop()
  owner_name: string;

  @Prop()
  nonlisted_laptopprice: number;

  @Prop()
  quantity: number;

  @Prop()
  factory_hof_approval: 'REJECTED' | 'APPROVED';

  @Prop()
  hq_finance_approval: 'REJECTED' | 'APPROVED';

  @Prop()
  hq_finance_comment: string;

  @Prop()
  rating: number;

  @Prop()
  rating_for_requestor_enduser: number;

  // request_item_fml: string;
  @Prop()
  request_signoff_date: Date;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  factory_hof_id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  factory_finance_id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  hq_finance_id: string;

  // Service Request
  // requestcategory: string;
  @Prop()
  sr_isautoclosed: boolean;

  @Prop()
  sr_autorejection_date: Date;

  @Prop()
  is_system_closed: boolean;

  @Prop()
  time_spent: number;

  @Prop()
  total: number;

  @Prop()
  unit_price: number;

  @Prop()
  expected_delivery_date: string;

  // Provision
  @Prop()
  application_type: 'Add New' | 'Change';

  @Prop()
  full_name: string;

  @Prop()
  position: string;

  @Prop()
  badge_no: string;

  @Prop()
  ext_no: string;

  @Prop()
  mobile_phone: string;

  @Prop()
  factory: string;

  @Prop()
  actual_work_station: string;

  @Prop()
  join_date: string;

  @Prop()
  end_date: boolean;

  @Prop()
  need_tgnas: boolean;

  @Prop()
  need_email: boolean;

  @Prop()
  need_erp: boolean;

  @Prop()
  need_vpn: boolean;

  @Prop()
  manager_hod_hof: string;

  @Prop()
  department: string;

  // approval
  @Prop({ enum: ['APPROVED', 'REJECTED'] })
  hod_approval: string;

  @Prop({ enum: ['APPROVED', 'REJECTED'] })
  hof_approval: string;

  @Prop()
  main_ticket_id: number;

  // Laptop
  @Prop()
  costing_rm: number;

  @Prop()
  is_firstlevel_support: boolean;

  @Prop()
  sap_costcenter: string;

  // general FK
  @Prop()
  parent_category: string;

  @Prop()
  category_type: string;

  // Access Permission
  @Prop()
  sr_category: string;

  @Prop()
  onbehalf_user: string;

  @Prop()
  hod_hof: string;

  @Prop()
  permission: 'READ ONLY' | 'READ & WRITE' | 'FULL ACCESS';

  @Prop()
  tgnas_path: string;

  @Prop()
  factory_location: string;

  @Prop()
  folder_name: string;

  @Prop()
  new_existing_folder: string;

  @Prop()
  access_type: 'PERMANENT' | 'TEMPORARY';

  @Prop()
  location: string;

  @Prop()
  vendor_email: string;

  @Prop()
  printer_type: string;

  @Prop()
  endpoint_type: string;

  @Prop()
  reason: string;

  @Prop()
  has_agreed_policy: boolean;

  @Prop()
  location_dvr_ipaddress: string;

  @Prop()
  start_date: string;

  @Prop()
  // end_date: string;
  @Prop()
  access_change: 'ADD ACCESS' | 'REMOVE ACCESS';

  @Prop()
  vendor_name: string;

  @Prop()
  group_email_not_in_list: string;

  @Prop()
  member_list: string;

  @Prop()
  vehicle_plate_no: string;

  @Prop()
  to_extract_report: boolean;

  @Prop()
  server_ip_name: string;

  @Prop()
  email_id: string;

  @Prop()
  computer_name: string;

  // Meeting
  @Prop()
  subject: string;

  @Prop()
  meeting_start_datetime: Date;

  @Prop()
  meeting_end_datetime: Date;

  @Prop()
  venue: string;

  @Prop()
  is_involved_ts: boolean;

  @Prop()
  hp_number: string;

  @Prop()
  meeting_remark: string;

  @Prop()
  language: string;

  @Prop()
  meeting_type: string;

  // Vehicle
  @Prop()
  contact_number_1: string;

  @Prop()
  contact_number_2: string;

  @Prop()
  costing: number;

  @Prop()
  dismantle_purpose: string;

  @Prop()
  material_group: string;

  @Prop()
  other_vehicle_type: string;

  @Prop()
  category_affected: string;

  @Prop({ enum: ['NEW INSTALLATION', 'DISMANTLE'] })
  vehicle_information: string;

  @Prop()
  vehicle_plate_number: string;

  @Prop()
  with_fuel_sensor: boolean;

  @Prop()
  createdby_id: number;

  @Prop()
  vehicle_department_id: number;

  // owner_id: number;
  @Prop()
  pic_1_id: number;

  @Prop()
  pic_2_id: number;

  @Prop()
  vehicle_type: string;

  // Change Request
  @Prop()
  actual_start_date: Date;

  @Prop()
  actual_end_date: Date;

  @Prop()
  change_description: string;

  @Prop()
  close_comments: string;

  @Prop()
  closed_datetime: Date;

  @Prop()
  attachment_no: number;

  @Prop()
  reason_for_change: string;

  @Prop()
  review_comments_details: string;

  @Prop()
  review_date: Date;

  @Prop()
  roll_out_plan_details: string;

  @Prop()
  scheduled_start_date: Date;

  @Prop()
  scheduled_end_date: Date;

  @Prop()
  update_count: number;

  @Prop()
  close_code: string;

  @Prop()
  completion_note: string;

  @Prop()
  roll_back_plan_details: string;

  @Prop()
  server_name: string;

  @Prop()
  is_emergency: boolean;

  @Prop()
  changerequest_category: string;

  @Prop()
  onbehalf_user_id: number;

  ///
  @Prop()
  owner_badge_id: string;

  // IR 4.0 projects
  @Prop()
  project_title: string;

  @Prop()
  is_abort: boolean;

  @Prop()
  data_storage_location: string;

  @Prop()
  description: string;

  @Prop()
  impact_if_not_change: string;

  @Prop()
  purpose: string;

  @Prop()
  remark: string;

  @Prop()
  is_tsm: boolean;

  @Prop()
  factory_: string;

  @Prop()
  project_scope: string;

  @Prop()
  bpo_subcategory: string;

  @Prop()
  sme_category: string;

  @Prop()
  fac_code: string;

  @Prop()
  hof1_id: number;

  @Prop()
  hof2_id: number;

  @Prop()
  jmc_id: number;

  @Prop()
  bpo_approver_id: number;

  @Prop()
  pmo_approver_id: number;

  @Prop()
  sme_approver_id: number;

  @Prop()
  pmo_approver: string;

  // Article
  @Prop()
  is_draft: boolean;

  // Cloud
  @Prop()
  project_name: string;

  @Prop()
  api_name: string;

  @Prop()
  email_address: string;

  @Prop()
  has_process_access: boolean;

  @Prop()
  owner_list: string;

  @Prop()
  editor_list: string;

  @Prop()
  viewer_list: string;

  @Prop()
  dashboard_name: string;

  @Prop()
  custom_frequency: string;

  @Prop()
  recipient_list: string;

  @Prop()
  sender_email_address: string;

  @Prop()
  recipient_email_address: string;

  @Prop()
  email_subject: string;

  @Prop()
  date_and_time: Date;

  @Prop()
  is_incur_cost: boolean;

  @Prop()
  monthly_estimated_cost: number;

  @Prop()
  cloud_service_provider: string;

  @Prop()
  it_hot_id: number;

  @Prop()
  it_hod_id: number;

  // Contract
  @Prop()
  expiry_date: string;

  @Prop()
  hostname: string;

  @Prop()
  product_name: string;

  @Prop()
  serial_no: string;

  @Prop()
  total_cost: number;

  @Prop()
  vendor_pic: string;

  @Prop()
  personincharge_id: number;

  @Prop()
  personincharge: string;

  @Prop()
  contract_type: string;

  // CMDB
  @Prop()
  serial_number: string;

  // UARF
  @Prop()
  has_acknowledge: boolean;

  @Prop()
  is_auto_acknowledge: boolean;

  @Prop()
  is_form_cancelled: boolean;

  @Prop()
  it_action_complete_date: string;

  @Prop()
  it_comment: string;

  @Prop()
  staff_job_grade: string;

  @Prop()
  staff_join_date: string;

  @Prop()
  has_missing_thing: boolean;

  @Prop()
  purchase_or_get_from_staff: 'PURCHASE' | 'GET FROM STAFF' | 'N/A';

  @Prop()
  reason_of_cancellation: string;

  @Prop()
  resign_date: string;

  @Prop()
  has_staff_acknowledge: boolean;

  @Prop()
  has_terms_and_condition: boolean;

  @Prop()
  staff_id: number;

  @Prop()
  name: string;

  @Prop()
  cmdb_id: number;

  @Prop()
  staff: string;

  // Current Approver
  @Prop()
  current_approvers: string[];
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
