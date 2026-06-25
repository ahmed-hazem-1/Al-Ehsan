# Wanis OCR Functional Requirements

This document defines what Wanis OCR must do to support employer-side healthcare fund administration, hospital invoice auditing, medical claim review, and validated payment decisions before settlement.

## 1. User and Role Management

- The system must allow administrators to create, update, activate, and deactivate user accounts.
- The system must support role-based access for administrators, medical reviewers, administrative reviewers, finance users, managers, and read-only users.
- The system must allow permissions to be assigned based on user role and organization.
- The system must prevent users from accessing claims, invoices, or employer data outside their permission scope.
- The system must record user actions related to claim review, document edits, and payment recommendations.

## 2. Employer and Healthcare Fund Setup

- The system must allow creation and management of employer profiles.
- The system must store employer details such as organization name, sector, contact persons, departments, and covered employee groups.
- The system must allow configuration of healthcare fund rules for each employer.
- The system must support coverage limits, exclusions, approval rules, required documents, and eligibility rules.
- The system must allow employers to be grouped by type, such as private company, oil company, contracting firm, ministry, factory, or public entity.

## 3. Employee and Covered Member Management

- The system must support adding employees and covered dependents under each employer.
- The system must store eligibility status for each covered member.
- The system must allow coverage rules to be linked to employee groups or dependent groups.
- The system must allow reviewers to verify whether the patient is eligible for the claimed service.
- The system must flag claims submitted for inactive or ineligible covered members.

## 4. Document Upload and Intake

- The system must allow users to upload hospital invoices, medical claims, referrals, medical reports, IDs, and supporting documents.
- The system must support common file formats such as PDF, JPG, PNG, and scanned document files.
- The system must group uploaded documents under the correct claim or invoice case.
- The system must allow users to add missing documents to an existing claim.
- The system must show document upload status and processing status.

## 5. OCR and Data Extraction

- The system must extract structured data from scanned invoices and claim documents.
- The system must extract key fields such as patient name, employer, provider, invoice number, claim date, service date, billed items, quantities, prices, totals, and diagnosis or service descriptions when available.
- The system must preserve the original document alongside extracted data.
- The system must allow reviewers to correct extracted fields manually.
- The system must mark low-confidence extracted fields for reviewer attention.

## 6. Document Classification and Routing

- The system must classify uploaded documents by type.
- The system must identify invoices, claims, referrals, medical reports, IDs, and supporting attachments.
- The system must route each document to the correct workflow stage.
- The system must identify incomplete claim packages.
- The system must notify reviewers when required documents are missing.

## 7. Claim Case Creation and Tracking

- The system must create a claim case for each submitted hospital invoice or medical claim.
- The system must assign a unique claim reference number.
- The system must track claim status through intake, OCR processing, administrative review, medical review, finance review, final recommendation, and closure.
- The system must support statuses including pending, in review, escalated, approved, reduced, rejected, clarification requested, and closed.
- The system must allow users to search and filter claims by employer, provider, member, date, amount, status, and reviewer.

## 8. Medical Review

- The system must allow medical reviewers to evaluate the necessity and appropriateness of billed services.
- The system must allow medical reviewers to add findings, notes, and recommendations.
- The system must support marking claim items as medically valid, invalid, partially valid, or requiring clarification.
- The system must allow escalation when additional medical documentation is needed.
- The system must preserve medical review decisions in the claim history.

## 9. Administrative Review

- The system must allow administrative reviewers to validate eligibility, required documents, approval rules, limits, and coverage conditions.
- The system must flag missing approvals, incomplete documentation, and rule violations.
- The system must allow reviewers to request clarification from the provider, employer, or internal team.
- The system must support administrative approval, reduction, rejection, or escalation recommendations.
- The system must preserve administrative review decisions in the claim history.

## 10. Invoice Audit and Billing Validation

- The system must display invoice line items for review.
- The system must flag duplicate charges and repeated invoice lines.
- The system must flag unusual pricing, unsupported items, and inconsistent billed quantities.
- The system must compare billed items against configured employer rules and limits.
- The system must allow reviewers to approve, reduce, reject, or comment on individual invoice items.

## 11. Provider and Hospital Oversight

- The system must store provider and hospital profiles.
- The system must link each invoice or claim to the submitting provider.
- The system must track claim values, reductions, rejections, and clarification requests by provider.
- The system must show provider-level billing patterns and recurring issues.
- The system must allow filtering reports by provider or hospital.

## 12. Review Workspace

- The system must show extracted claim data beside the original scanned document.
- The system must allow reviewers to compare fields with the source document.
- The system must highlight fields requiring attention.
- The system must allow reviewer comments at claim level and line-item level.
- The system must allow reviewers to save progress before final recommendation.

## 13. Clarification and Escalation Workflow

- The system must allow claims to be marked as requiring clarification.
- The system must allow reviewers to define the reason for clarification.
- The system must track clarification requests and responses.
- The system must allow escalated claims to return to review after additional information is provided.
- The system must preserve all clarification activity in the claim audit trail.

## 14. Payment Recommendation

- The system must generate a final payment recommendation before employer funds are released.
- The system must support final outcomes: approve, reduce, reject, or request clarification.
- The system must calculate recommended payable amount after reductions or rejected line items.
- The system must include medical and administrative reasoning in the final recommendation.
- The system must provide a clear output that finance teams can use before settlement.

## 15. Dashboard and Work Queue

- The system must provide a dashboard for active claim queues.
- The dashboard must show pending, in-review, escalated, approved, reduced, rejected, and clarification-requested claims.
- The dashboard must show workload by reviewer, employer, provider, claim type, and status.
- The dashboard must allow users to open claims requiring action.
- The dashboard must highlight bottlenecks and aging claims.

## 16. Analytics and Reporting

- The system must report approved, reduced, rejected, pending, and total claimed amounts.
- The system must report estimated savings from reductions and rejections.
- The system must show utilization trends by employer, department, covered group, provider, and claim type.
- The system must provide healthcare fund exposure reports.
- The system must allow exporting reports for management, finance, or governance review.

## 17. Search, Filtering, and Export

- The system must allow users to search claims, invoices, employers, providers, and covered members.
- The system must support filtering by date range, status, amount, provider, employer, reviewer, and claim type.
- The system must allow exporting claim lists and reports.
- The system must allow downloading original documents where permissions allow.
- The system must allow downloading final payment recommendation summaries.

## 18. Audit Trail and Governance

- The system must keep an audit trail for each claim.
- The audit trail must include document uploads, OCR changes, reviewer actions, status changes, comments, escalations, and final decisions.
- The system must record timestamps and user identities for key actions.
- The system must prevent unauthorized modification of closed claim decisions.
- The system must support management review of historical decisions.

## 19. Notifications and Alerts

- The system must notify assigned users when claims require action.
- The system must notify reviewers when required documents are missing.
- The system must alert managers about aging claims or bottlenecks.
- The system must notify finance users when a final payment recommendation is ready.
- The system must support notification preferences by role where applicable.

## 20. Configuration and Administration

- The system must allow administrators to configure claim statuses, review rules, employer rules, provider lists, and user permissions.
- The system must allow rule updates without requiring code changes where possible.
- The system must support organization-specific configurations.
- The system must allow administrators to manage reference data such as departments, claim types, provider categories, and document types.
- The system must maintain a history of important configuration changes.
