# Google Play Child Safety Standards Compliance Document
## Chamba App - Child Safety Requirements

**Last Updated:** April 17, 2026
**App Name:** Chamba
**Package ID:** com.photohost
**Child Safety Contact:** chambasafety@gmail.com

---

## ✅ COMPLIANCE CHECKLIST

### 1. Published Standards ✅
**Requirement:** Publish explicit prohibition of child sexual abuse and exploitation (CSAE)

**Implementation:**
- **Location:** Settings → Community Standards screen
- **File:** `src/screens/Settings/CommunityStandards.js`
- **Available in:** English and Russian
- **Accessible:** All users can view from app settings

**Content Includes:**
- ZERO TOLERANCE policy for CSAE prominently displayed
- Explicit prohibition of:
  - Child Sexual Abuse Material (CSAM)
  - Sexual content involving minors
  - Child exploitation or endangerment
  - Grooming or predatory behavior toward minors
- Mandatory reporting to NCMEC and law enforcement
- Immediate account termination for violations

---

### 2. In-App User Feedback Mechanism ✅
**Requirement:** Confirm users can submit reports, complaints, and questions

**Implementation:**
- **Component:** SpamModal (Report Modal)
- **File:** `src/components/spamModal/index.js`
- **Trigger:** "Report" button on all posts (3-dot menu)

**Report Categories:**
1. **🚨 Child exploitation or abuse** (URGENT - highlighted in red)
2. Harassment or unwanted contact
3. Sale or advertising of restricted items
4. Nudity or sexual content
5. Fraud, deception, or spam
6. False information
7. I don't like this

**Features:**
- Anonymous reporting
- Emergency services reminder for immediate danger
- Available in English and Russian
- Prioritized child safety reporting with visual emphasis

---

### 3. CSAM Detection and Removal ✅
**Requirement:** Confirm appropriate measures for handling CSAM

**Our Policy:**
When CSAM or child exploitation content is reported through our in-app system:

1. **Immediate Action:**
   - Content flagged for urgent review
   - User account immediately blocked by reporter
   - Content removed from visibility pending investigation

2. **Investigation Process:**
   - Human moderation review within 24 hours
   - Evidence preservation for law enforcement
   - Cross-reference with known CSAM databases

3. **Enforcement Actions:**
   - Permanent account termination
   - IP and device ban
   - Immediate reporting to NCMEC (CyberTipline)
   - Full cooperation with law enforcement
   - Evidence provided for prosecution

4. **Technology:**
   - Server-side content moderation
   - User reporting system with priority flagging
   - 24/7 monitoring capability

---

### 4. Compliance with Child Safety Laws ✅
**Requirement:** Confirm compliance with applicable child safety laws

**Our Commitment:**
- Full compliance with:
  - US federal child protection laws (18 U.S.C. § 2258A)
  - PROTECT Act
  - International child safety regulations
  - NCMEC reporting requirements

**Reporting Process:**
- All CSAM reports submitted to NCMEC CyberTipline
- Cooperation with international law enforcement (INTERPOL, Europol)
- Compliance with local authorities in all operating jurisdictions
- Evidence preservation per legal requirements
- Response to law enforcement inquiries within 24 hours

---

### 5. Child Safety Point of Contact ✅
**Requirement:** Designated contact for child safety notifications

**Primary Contact Information:**
- **Email:** chambasafety@gmail.com
- **Purpose:** Child safety reports and CSAM incidents
- **Response Time:** Reports reviewed 24/7, escalated to law enforcement immediately when necessary
- **Languages:** English, Russian

**Contact Responsibilities:**
- Receive and review all child safety reports
- Coordinate with moderation team
- Interface with law enforcement
- Manage NCMEC reporting
- Handle Google Play notifications about CSAE content
- Implement content removal procedures
- Maintain reporting documentation

**Visibility:** Contact information is published in:
- Community Standards screen (in-app)
- This compliance document
- Available to Google Play for notifications

---

## DECLARATION FOR GOOGLE PLAY CONSOLE

When submitting to Google Play Console, declare the following:

### Question 1: Published Standards
**"Does your app have published standards that explicitly prohibit child sexual abuse and exploitation?"**
- ✅ **YES**
- Location: Settings → Community Standards
- Includes explicit zero-tolerance policy for CSAE

### Question 2: In-App Feedback
**"Does your app have an in-app mechanism for user feedback?"**
- ✅ **YES**
- Users can report posts via "Report" button
- 7 categories including prioritized "Child exploitation or abuse"

### Question 3: CSAM Handling
**"Do you take appropriate measures when CSAM is detected?"**
- ✅ **YES**
- Immediate content removal
- Account termination
- Mandatory NCMEC reporting
- Law enforcement cooperation

### Question 4: Legal Compliance
**"Does your app comply with applicable child safety laws?"**
- ✅ **YES**
- Full compliance with US federal laws
- NCMEC CyberTipline reporting
- International law enforcement cooperation

### Question 5: Safety Contact
**"Do you have a child safety-specific point of contact?"**
- ✅ **YES**
- Email: chambasafety@gmail.com
- 24/7 monitoring
- Published in Community Standards

---

## ADDITIONAL SAFETY MEASURES

### User Protection Features:
- Block/Blacklist functionality
- Anonymous reporting
- In-app reporting accessible from all posts
- Clear community standards accessible to all users

### Moderation:
- 24/7 platform monitoring capability
- Human review of reports
- Immediate response to violations
- Evidence preservation

### Prevention:
- Clear terms prohibiting illegal content
- User education via Community Standards
- Proactive enforcement of safety policies

---

## FOR GOOGLE PLAY SUBMISSION

**When filling out the Child Safety Standards form in Play Console:**

1. Check "YES" to all 5 requirements
2. Reference this document if additional information is requested
3. Provide safety contact: chambasafety@gmail.com
4. Link to Community Standards: Available in-app under Settings → Community Standards

**Supporting Evidence Available:**
- Screenshots of Community Standards screen
- Screenshots of Report modal with child safety category
- Source code references (provided above)
- This compliance documentation

---

## CONTACT

For questions about this compliance documentation:
- **Child Safety Contact:** chambasafety@gmail.com
- **Developer Contact:** [Your contact email]

---

**Certification:**
I certify that the Chamba app complies with all Google Play Child Safety Standards requirements as outlined in this document.

Date: April 17, 2026
