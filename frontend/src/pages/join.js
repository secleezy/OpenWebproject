import "./UserInterface.css"; //내가만든 css 가져오기
import React, { useState, useEffect } from "react"; //리액트 동적변수 사용
import { Link, useNavigate } from "react-router-dom";

export default function Join() {
  const [email, setEmail] = useState("");
  const [pw, setpw] = useState("");
  const [verifypw, setverifypw] = useState("");

  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);

  const [emaildomain, setemaildomain] = useState("");

  const navigate = useNavigate();

  let realemail = "";

  const onJoin = () => {
    //realemail이 이메일임!!!!!!!!!!!!!
    //pw가 비번임!!!!!!!!!!!
    //verifypw가 비번확인임!!!!!!!!!!

    realemail = email + "@" + emaildomain;
    //alert(realemail);

    const regex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/;
    //alert(regex.test(pw));

    if (!ageCheck) alert("Please check Terms and Conditions.");
    else {
      if (!useCheck)
        alert("Please check Collection and Use of Personal Information.");
      else {
        if (!email)
          //이메일이 비어있으면
          alert("The email address you have entered is not available.");
        else {
          if (emaildomain == "")
            //이메일 도메인 미선택시
            alert("Please select domain of email.");
          else {
            if (!pw)
              //비번이 비어있으면
              alert("Password is required.");
            else {
              //비번 유효성 확인
              if (!regex.test(pw)) alert("Please check password.");
              else {
                if (!verifypw)
                  //비번확이 비어있으면
                  alert("Password verify is required.");
                else {
                  //비번이랑 비번확인 같은지 확인
                  if (pw == verifypw) {
                    if (email && pw && verifypw) {
                      //alert("Success");
                      navigate("/successjoin");
                      //회원가입 성공 ! 데이터 보내기 !!!!!!!!!
                      //회원가입 성공 ! 데이터 보내기 !!!!!!!!!
                      //회원가입 성공 ! 데이터 보내기 !!!!!!!!!
                    }
                  } else {
                    alert("Please verify check password.");
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  const onemailChange = (e) => {
    setEmail(e.target.value);
  };

  const onemaildomailChange = (e) => {
    setemaildomain(e.target.value);
  };

  const onpwChange = (e) => {
    setpw(e.target.value);
  };

  const onverifypwChange = (e) => {
    setverifypw(e.target.value);
  };

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  useEffect(() => {
    if (ageCheck === true && useCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck]);

  return (
    <div>
      <Link to="/">
        <img
          src="images/logo.png"
          alt="BigCo Inc. logo"
          style={{ width: "200px", margin: "30px", marginBottom: "40px" }}
        />
      </Link>
      <br />

      <div class="join" style={{ width: "100%", textAlign: "center" }}>
        <table style={{ display: "inline-block" }}>
          <tr>
            <td style={{ width: "250px", textAlign: "left" }}>
              <b>Basic information</b>
            </td>

            <td style={{ width: "50px" }}></td>

            <td style={{ width: "250px", textAlign: "left" }}>
              <b>AGREE ALL</b>
              <br />
            </td>
          </tr>
          <tr style={{ height: "25px" }}></tr>
          <tr>
            <td
              style={{
                width: "250px",
                textAlign: "left",
                fontSize: "12px",
                verticalAlign: "top",
              }}
            >
              <b>
                EMAIL <sub style={{ color: "Blue", fontSize: "18px" }}>*</sub>
              </b>
              <br />
              <input
                type="text"
                style={{ width: "40%" }}
                value={email}
                onChange={onemailChange}
                maxlength="15"
              ></input>
              　@　
              <select
                class="select"
                title="이메일 도메인 주소 선택"
                style={{ width: "40%" }}
                value={emaildomain}
                onChange={onemaildomailChange}
              >
                <option value="">-select-</option>
                <option value="naver.com">naver.com</option>
                <option value="gmail.com">gmail.com</option>
                <option value="hanmail.net">hanmail.net</option>
                <option value="hotmail.com">hotmail.com</option>
                <option value="korea.com">korea.com</option>
                <option value="nate.com">nate.com</option>
                <option value="yahoo.com">yahoo.com</option>
              </select>
              <br />
              Enter your email address to use as login ID.
              <br />
              <br />
              <br />
              <b>
                PASSWORD Required Field{" "}
                <sub style={{ color: "Blue", fontSize: "18px" }}>*</sub>
              </b>
              <br />
              <input
                type="password"
                value={pw}
                onChange={onpwChange}
                maxlength="16"
              ></input>
              <br />
              [Must contain Upper and lowercase letters/numbers/special
              characters (8 to 16 characters)] each at least one. (inputable
              sepcial characters : #?!@$ %^&*-)]
              <br />
              <br />
              <br />
              <b>
                CONFIRM PASSWORD Required Field{" "}
                <sub style={{ color: "Blue", fontSize: "18px" }}>*</sub>
              </b>
              <br />
              <input
                type="password"
                value={verifypw}
                onChange={onverifypwChange}
                maxlength="16"
              ></input>
              <br />
            </td>
            <td></td>
            <td style={{ width: "250px", textAlign: "left", fontSize: "12px" }}>
              <table>
                <tr>
                  <td
                    style={{ padding: "10px", border: "1px solid lightgray" }}
                  >
                    <input
                      type="checkbox"
                      id="all-check"
                      checked={allCheck}
                      onChange={allBtnEvent}
                    />
                    <b style={{ marginLeft: "5px" }}>
                      Agree to Terms of Use, Privacy Policy, and subscription
                      for shopping information (optional).
                    </b>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ padding: "10px", border: "1px solid lightgray" }}
                  >
                    <b>Terms and Conditions (Required)</b>

                    <br />
                    <br />

                    <div
                      style={{
                        overflowY: "scroll",
                        width: "300px",
                        height: "150px",
                        padding: "10px",
                        backgroundColor: "#EEEEEE",
                      }}
                    >
                      Article 1 (Purpose) The purpose of the following Terms and
                      Conditions of Use(‘T&C’) is to establish guidelines on
                      rights, duties and responsibilities of cybermall Users
                      utilizing the internet-related services (hereinafter
                      referred to as the ‘Services’) provided by the cybermall
                      (hereinafter referred to as the ‘Mall’) operated by
                      company (e-commerce company). ※ 『Unless transactions
                      contradict its properties, the following terms apply to
                      e-commerce transactions utilizing methods of PC
                      communication, wireless and others』 Article 2
                      (Definition) ①‘Mall’ refers to a virtual business site
                      established by company to trade goods or services
                      (hereinafter referred to as ‘Goods and Services’) using
                      computers and information communication facilities to
                      provide Goods and Services to Users. The term can also be
                      defined as a company operating a cybermall. ②‘User’ refers
                      to a Member and Non-Member who has accessed the ‘Mall’ to
                      use the services provided by the ‘Mall’ in accordance with
                      this T&C. ③‘Member’ refers to a User who uses the services
                      provided by the ‘Mall’ by subscribing for Membership.
                      ④‘Non-Member’ refers to a User who uses the services
                      provided by the ‘Mall’ without subscription. Article 3
                      (Display, Explanation and Amendment of Terms and
                      Conditions of Use) ① The ‘Mall’ shall, for easy
                      recognition by Users, display the contents of this T&C,
                      name of company and representative, business
                      address(including an address handling customer
                      complaints), phone number, fax number, email address,
                      business license number, e-commerce permit number, and the
                      name of personal information manager on the main page of
                      the ‘Mall’. Only the content of this T&C can be displayed
                      though a link page. ② Prior to User’s final agreement to
                      this T&C, the ‘Mall’ shall provide a separate link or
                      pop-up screen to obtain User’s verification on the terms
                      of cancellation rights, delivery responsibilities, refund
                      conditions and other important details. ③ The ‘Mall’ may
                      make amendments within the permissible range without
                      violating applicable laws such as the 「Act on Consumer
                      Protection in Electronic Commerce」, 「Regulation of
                      T&C」, 「Framework Act on Electronic Commerce and
                      Electronic Document」, 「Electronic Financial Transaction
                      Act」, 「Electronic Signature Act」, 「Act on Protection
                      of Information and Promotion of Utilization of Information
                      and Communications Network」, 「Door-To-Door Sales Act」,
                      「Framework Act on Consumers」 and other related Consumer
                      Protection Laws. ④ The ‘Mall’ shall specify the effective
                      date and the reasons for amendment of the terms and have
                      post on the initial screen for 7 days prior to effective
                      date until the day before the effective date. If the
                      amendment is modified to the User’s disadvantage, then the
                      ‘Mall’ shall grant at least 30 days of grace period for
                      notice. In this case, the ‘Mall’ shall clarify the ‘before
                      and after’ changes in an ‘easy-to-understand’ manner. ⑤
                      When the ‘Mall’ makes an amendment to the T&C, the
                      modified T&C shall be applied only to contracts concluded
                      after the effective date, whereas all contracts concluded
                      before the effective date will remain under the provisions
                      of the old T&C. However, if the User who has already
                      signed the contract wishes to have the amendments
                      administered, then the User may send his/her intent to the
                      ‘Mall’ and acquire consent from the ‘Mall’ within the
                      notice period stated in Clause ③ and it shall be applied
                      accordingly. ⑥ Any information not specified and
                      interpreted in this T&C shall be in accordance with the
                      e-commerce Transaction Guidelines and Related Consumer
                      Protection Acts provided by the Fair Trade Commission and
                      other applicable Consumer Protection Laws and Regulation
                      of T&C Act. Article 4 (Provision & Replacement of Service)
                      ① The ‘Mall’ shall perform the following duties: 1.
                      Provide information regarding Goods and Services and
                      conclude purchasing contracts. 2. Deliver Goods and
                      Services on purchase contract. 3. Other duties designated
                      by the ‘Mall.’ ② The ‘Mall’ may replace Goods and Services
                      provided in future T&C in the event that Goods and
                      Services are sold out or technical specifications are
                      revised. In this case, the ‘Mall’ shall immediately
                      announce the replacement of Goods and Services and the
                      date of application on the page where present Goods and
                      Services are displayed. ③ In the event that Goods and
                      Services are replaced because of a change in technical
                      specifications or when Goods and Services are sold out,
                      the ‘Mall’ shall immediately notify the cause of
                      replacement to the addresses of the Users. ④ Following the
                      previous Clause, the ‘Mall’ shall compensate for all
                      damages caused. However, this shall not apply if the
                      ‘Mall’ proves that such event is not caused by its
                      intention or negligence. Article 5 (Suspension of Service)
                      ① The ‘Mall’ may temporarily suspend its services as a
                      result of the following reasons: maintenance of computers
                      and telecommunications equipment, replacement or damage
                      repairs, and interruption of communication. ② The ‘Mall’
                      shall compensate User or any Third Party Member of damages
                      caused by the temporary suspension of services due to
                      reason(s) detailed in Clause ①. However, this shall not
                      apply if the ‘Mall’ proves that such event is not caused
                      by its intention or negligence. ③ In the case of a
                      conversion of business item, abandonment of business,
                      merging between businesses and for other various reasons,
                      the ‘Mall’ shall notify the consumer as specified in
                      Article 8 and reward consumer in accordance with the
                      conditions suggested by the original ‘Mall.’ However, if
                      the ‘Mall’ does not advise such standard of compensation,
                      the ‘Mall’ shall pay Users for their mileage or reserve in
                      kind or cash of which value corresponds to the currency
                      being used at the ‘Mall.’ Article 6 (Membership) ① The
                      User shall apply for Membership by expressing his/her
                      intent to agree to this T&C after filling out the form
                      designated by the ‘Mall’ with Member’s personal
                      information. ② The ‘Mall’ shall register all Users who
                      apply for Membership in the manner stipulated in Clause ①
                      unless the User is not engaged in one of the following
                      issues: 1. After the applicant has lost Membership for
                      reasons indicated in Article 7 Clause ③, the applicant may
                      acquire approval to re-subscribe for Membership three
                      years after the loss of Membership. 2. Entry of false
                      information or omission in the registration form. 3. If
                      deemed that registering the User would present technical
                      difficulties to the ‘Mall.’ ③ Establishment of Membership
                      becomes effective at the time that the Member receives the
                      ‘Mall’s approval of Membership. ④ In due course of time,
                      the Member shall update the ‘Mall’ with any changes to
                      his/her account information through the methods of editing
                      personal information. Article 7 (Withdrawal from
                      Membership & Loss of Eligibility) ① Members of the ‘Mall’
                      may request, at any time, to withdraw from Membership and
                      the ‘Mall’ shall immediately process the request. ② The
                      ‘Mall’ may limit or suspend Membership for the following
                      reasons: 1. Entry of false information or omission in the
                      registration form. 2. If the purchase payment of goods and
                      other ‘Mall’ usage related liabilities have not been paid
                      for before the appointed date. 3. If Member interferes
                      with others to use the ‘Mall’ or threatens the order of
                      e-commerce (such as the illegal use of personal
                      information). 4. If Member uses the ‘Mall’ to act against
                      public order and morals prohibited by the law and this
                      ‘T&C.’ ③ The ‘Mall’ may forfeit Membership of the Member
                      whose Membership was suspended or limited, if the same
                      actions are repeated twice or more, or if the cause is not
                      corrected within 30 days. ④ When the ‘Mall’ forfeits
                      Membership, all information will be cancelled. Prior to
                      cancellation, the ‘Mall’ shall notify the Member and give
                      at least 30 days or more to grant an opportunity to
                      explain the cause. Article 8 (Notification to Members) ①
                      Any notifications from the ‘Mall’ will be sent to the
                      email address designated in advance by the Member during
                      registration. ② In the event of sending notifications to
                      unspecified Members, a display of notifications on the
                      notice board on the website for 1 week or more may replace
                      sending emails. However, the ‘Mall’ shall send individual
                      notice to a Member in regards to matters which may have a
                      significant influence in his/her transaction. Article 9
                      (Application for Purchase) ① The User shall apply for
                      purchase in the following or in a similar manner, and the
                      ‘Mall’ shall provide the User with the following
                      information in an ‘easy-to-understand’ manner to aid in
                      his/her request for purchase. 1. Search and select Goods
                      and Services 2. Enter name of recipient, address, phone
                      number, email address (or mobile phone number) 3. Confirm
                      matter(s) in respect to the contents of this T&C, limited
                      cancellation policies, delivery fees, installation fees,
                      and others 4. Express agreement to this T&C and confirm or
                      refuse the above Item 3 (ex. mouse click) 5. Apply and
                      confirm purchase of goods; Agree to allow confirmation of
                      application from the ‘Mall’ 6. Select payment method ② In
                      case of an inevitable need (for the ‘Mall’) to
                      disclose∙consign consumer’s personal information to a
                      third party, the ‘Mall’ shall obtain consumer’s consent at
                      the time of applying for purchase. This consent is not
                      obtained in advance at the time of applying for
                      Membership. At this time, the ‘Mall’ shall specify to the
                      consumer the provisions of personal information that are
                      being disclosed, information of the receiving party,
                      purpose and intent of use and the duration of
                      retention∙use. But, consignment of personal information
                      according to Clause ① of Article 25 in the 「Act on
                      Protection of Information and Promotion of Utilization of
                      Information and Communications Network」 shall comply with
                      relevant laws and legislations in regards to affairs not
                      mentioned in the Act. Article 10 (Conclusion of Contract)
                      ① The ‘Mall’ may not accept request for purchase in
                      Article 9 if it falls under one of the following items. In
                      the event of concluding a contract with a minor, the
                      ‘Mall’ shall notify that the failure to acquire agreement
                      from a legal representative may cause cancellation of the
                      contract by the minor him/herself or the legal
                      representative. 1. Entry of false information or omission
                      in the registration form 2. Purchase of cigarettes and
                      liquor and other Goods and Services prohibited by the
                      Youth Protection Law 3. If deemed that accepting
                      application for purchase may cause technical problems to
                      the ‘Mall’ ② The contract is deemed to be concluded when
                      the acceptance of the ‘Mall’ is delivered to the User in
                      the form stipulated in Clause ① of Article 12. ③ The
                      acceptance of the ‘Mall’ shall include confirmation on the
                      User’s request for purchase, availability of sales, and
                      correction or cancellation of the request for purchase.
                      Article 11 (Payment Method) The method of payment for
                      Goods and Services purchased through the ‘Mall’ may be
                      selected from the following items. The ‘Mall’ may not
                      collect any additional fees regarding payment for Goods
                      and Services. 1. Account transfer through phone banking,
                      internet banking, mail banking and others. 2. Card payment
                      through prepaid card, debit card, credit card, and others.
                      3. Online bank transfer 4. Electronic money 5. Payment
                      upon receipt 6. Mileage points or points offered by the
                      ‘Mall’ 7. Gift voucher contracted or approved by the
                      ‘Mall’ 8. Other means of electronic payment Article 12
                      (Notice of Receipt, Change and Cancellation of Application
                      for Purchase) ① The ‘Mall’ shall send a notice of receipt
                      to the User after receiving the User’s application for
                      purchase. ② In the case of a discord between the User’s
                      intent and the received notice, the User may change or
                      cancel the application for purchase immediately after
                      receipt. If the request for change or cancellation is made
                      prior to delivery, the ‘Mall’ shall process the request
                      accordingly without any delay. In the event that payment
                      has already been made, User shall follow the guidelines
                      detailed in Article 15 - Cancellation of Purchase. Article
                      13 (Provision of Goods and Services) ① Unless otherwise
                      specified, the ‘Mall’ shall take necessary measures such
                      as customizing production and packaging and deliver Goods
                      and Services within 7 days from the date of purchase.
                      However, if the ‘Mall’ has already received payment in
                      whole or in part, then delivery shall be processed within
                      3 business days from the date of receipt. In such
                      instances, the ‘Mall’ shall take necessary measures to
                      inform the User on procedures of provision and delivery
                      status of Goods and Services. ② The ‘Mall’ shall specify
                      delivery method, payer, and delivery time for each
                      delivery method for the Goods and Services purchased by
                      the User. In the event that the ‘Mall’ exceeds the
                      designated period of delivery, it shall compensate the
                      User for damages. However, this shall not apply if the
                      ‘Mall’ proves that such event is not caused by its
                      intention or negligence. Article 14 (Refund) In the event
                      that the Goods and Services are sold-out or unavailable
                      and cannot be provided or delivered to a User who applied
                      for purchase, the ‘Mall’ shall notify the User without any
                      delay, and if payment for Goods and Services has already
                      been made in advance, the ‘Mall’ shall take necessary
                      measures or refund payment within 3 business days from the
                      date of receipt. Article 15 (Cancellation of Purchase) ①
                      The User who purchased Goods and Services by concluding
                      the contract with the ‘Mall’ in accordance to Clause ② of
                      Article 13 in the 「Acts on Consumer Protection in
                      Electronic Commerce」 may cancel purchase within 7 days
                      from the date on which the User received a written
                      contract (if the written contract is received later than
                      the supply of Goods and Services, then the receipt date is
                      set on the date when User received the Goods and Services
                      or when Goods and Services have been supplied). But,
                      cancellation of purchase according to 「Acts on Consumer
                      Protection in Electronic Commerce」 shall comply with
                      relevant laws and legislations in regards to affairs not
                      mentioned in the Acts. ② The User may not return or
                      exchange Goods and Services in the event of one of the
                      following reasons: 1. Delivered Goods lost or damaged at
                      the fault of the User (however, cancellation of purchase
                      may be acceptable if packaging was damaged in the process
                      of checking content) 2. Significant decrease in value of
                      Goods and Services due to partial use or consumption by
                      the User 3. Not available for resale due to a significant
                      decrease in value of Goods and Services from lapse of time
                      4. The Goods may be replaced by Goods showing the same
                      performance, but packaging of the original is damaged ③ In
                      the case of items 2 or 4 of Article 2 Clause ②, the
                      cancellation of purchase by User will not be limited if
                      the ‘Mall’ failed to clearly specify the fact that
                      cancellation of purchase is limited or that it would take
                      necessary measures to provide the Goods. ④ Despite Clause
                      ① and ②, the User may cancel his/her purchase of goods
                      within 3 months from the date of receipt of the goods or
                      within 30 days from the date on which he/she recognized or
                      could have recognized that Goods and Services differ from
                      the advertisement or the provision of contract. Article 16
                      (Effect of Cancellation of Purchase) ① In the event of a
                      return of Goods from a User, the ‘Mall’ shall refund
                      payment of Goods within 3 business days. In the event of a
                      delay in refund, the ‘Mall’ shall pay User with the
                      interest calculated by the number of days delayed with the
                      overdue interest rate indicated on the 「Act on Consumer
                      Protection in Electronic Commerce」 ② In regards to the
                      above-mentioned case, if the User made payment of Goods
                      with credit card or electronic money, the ‘Mall’ shall
                      immediately request the business who provided such payment
                      method to suspend or cancel payment. ③ In the event of any
                      cancellation of purchase, the User shall bear the costs
                      arising from returning the Goods. On the account of the
                      User’s cancellation of purchase, the ‘Mall’ shall not
                      claim charge for cancellation or compensation for damage.
                      However, in the event of a cancellation of purchase caused
                      by a discord in the contents of Goods and the
                      advertisement or the provision of contract, the ‘Mall’
                      shall bear the costs of returning the Goods. ④ If the User
                      bore the delivery fees when he/she received the Goods, the
                      ‘Mall’ shall specify and make noticeable as to who would
                      bear the delivery fees upon cancellation of purchase.
                      Article 17 (Protection of Personal Information) ① The
                      ‘Mall’ collects a minimum amount of information necessary
                      to provide the services. ② At the time of applying for
                      Membership, the ‘Mall’ shall not collect information
                      needed for the performance of purchase contract in
                      advance. But, in the case where personal identification is
                      required before the performance of a purchase contract, a
                      minimum amount of specified personal information is
                      collected for the fulfillment of obligation in regards to
                      relevant laws and legislation. ③ The ‘Mall’ shall obtain
                      consent from User to collect∙use personal information by
                      notifying User with the aim/purpose of collection∙use. ④
                      The ‘Mall’ shall not use the personal information outside
                      their intended purpose. In the event of an uprising of a
                      new use or when disclosing to third parties, the ‘Mall’
                      shall notify the purpose of use and obtain consent from
                      User during the stage of use disclosure. But, there are
                      exceptions for cases regulated in the relevant laws and
                      legislations. ⑤ In the event that the ‘Mall’ is required
                      to acquire the approval of User by Clause ② and ③, the
                      ‘Mall’ shall specify its personal information manager
                      (affiliation, name, phone number, other contact
                      information), purpose of collection and use of
                      information, information about Third Party (recipient,
                      purpose of provision and the information to be provided),
                      and the provisions stipulated in Clause ② of Article 22 of
                      the 「Act on Protection of Information and Promotion of
                      Utilization of Information and Communications Network」.
                      The User may at any time cancel his/her approval. ⑥ User
                      may, at any time, request for confirmation and correction
                      of error in their personal information possessed by the
                      ‘Mall,’ and the ‘Mall’ shall be responsible for taking any
                      necessary measures without any delay. In the event that a
                      User requests for the correction of an error, the ‘Mall’
                      shall not use the applicable personal information until
                      error is corrected. ⑦ For protection of personal
                      information, the ‘Mall’ shall limit the number of persons
                      handling personal information to a minimum, and shall be
                      responsible for any damages caused by loss, theft,
                      leakage, falsification, and disclosure of personal
                      information including credit card and bank account
                      information to third parties without consent of the User.
                      ⑧ The ‘Mall’ or any Third Parties who received personal
                      information from the ‘Mall,’ shall without any delay
                      destroy all personal information once the purpose of
                      collection has been achieved. ⑨ The ‘Mall’ shall not have
                      the agreement form regarding the collection∙use∙disclosure
                      of personal information set to be filled out in advance.
                      The ‘Mall’ must specify services that will be restricted
                      if User does not agree to the collection∙use∙disclosure of
                      personal information, and the ‘Mall’ shall not limit
                      services or refuse to accept Membership applications on
                      the basis of User’s refusal to agree to
                      collecting∙using∙disclosing of personal information that
                      do not include the collection of compulsory information.
                      Article 18 (Obligations of the ‘Mall’) ① The ‘Mall’ shall
                      not take any actions against public policy or actions
                      restricted by the law and this T&C. The ‘Mall’ shall put
                      its best efforts in providing Goods and Services on a
                      stable basis in accordance with the provisions in this
                      T&C. ② The ‘Mall’ shall be equipped with a security system
                      to protect personal information of Users (including credit
                      information) and provide a safe environment for Users to
                      use the online services. ③ In accordance with Article 3 of
                      the Law related to 『Fairness of Display and
                      Advertisement』, the ‘Mall’ shall be responsible to
                      compensate User(s) if damages were caused by displaying or
                      adding unjust or unreasonable advertisement for certain
                      Goods and Services ④ The ‘Mall’ shall not send any
                      profit-making emails which are not wanted by Users.
                      Article 19 (Obligations for ID & Password of Member) ①
                      Member shall be responsible for the management of his/her
                      ID and password, except for the case in Article 17. ②
                      Member shall not allow any Third Party to use his/her ID
                      and password. ③ When a Member recognizes that his/her ID
                      and/or password is stolen or is being used by a Third
                      Party, the Member shall immediately notify the ‘Mall’, and
                      follow the instructions of the ‘Mall.’ Article 20
                      (Obligations of User) Users shall avoid the following
                      actions: 1. Register false information at the time
                      application or revision of information 2. Use others’
                      personal information 3. Change information displayed on
                      the ‘Mall’ 4. Remit or display information (computer
                      program and others) other than the information put on by
                      the ‘Mall’ 5. Infringe copyright or intellectual property
                      rights of the ‘Mall’ or the Third Party 6. Take any action
                      that harms the reputation and interrupts the operation of
                      the ‘Mall’ or a Third Party 7. Disclose or display any
                      information containing indecent or violent message, video,
                      voice, and other information going against good public
                      order and morals. Article 21 (Relationship between Linking
                      Mall & Linked Mall) ① In the event that the main mall and
                      the sub-mall are linked with a hyperlink (ex. the subject
                      of hyperlink includes text, image and video), the former
                      is called as the Linking Mall (Website) and the latter is
                      called as the Linked Mall (Website). ② If the Linking Mall
                      specifies and notifies the fact that it is not responsible
                      for any transaction with the User for any Goods and
                      Services independently provided by the Linked Mall on the
                      initial page of the website of the Linking Mall or a
                      pop-up window, then the Linking Mall is not responsible
                      for such transaction. Article 22 (Copyright & Limitation
                      of Use) ① The copyright and other intellectual property
                      rights for the works produced by the ‘Mall’ shall belong
                      to the ‘Mall.’ ② The User may not use or cause any Third
                      Party to use information with intellectual property rights
                      belonging to the ‘Mall’ for reproduction, transmission,
                      publishing, distribution, broadcasting or other
                      profit-making use without prior consent of the ‘Mall.’ ③
                      The ‘Mall’ shall notify the User when using the copyright
                      belonging to the applicable User in accordance with mutual
                      T&C. Article 23 (Resolution of Dispute) ① The ‘Mall’ shall
                      apply and reflect the opinion or complaint made by
                      User(s), and install and operate a process for
                      compensation of consumers’ damages. ② The ‘Mall’ shall
                      give priority to any opinion or complaint made by User(s).
                      However, in the event that it may not be able to promptly
                      deal with the matter, the ‘Mall’ shall notify the User
                      with the cause and the final settlement schedule. ③ When a
                      User files for Remedy of Damage regarding a dispute
                      between the ‘Mall’ and the User, the matter may be
                      commissioned for arbitration by the Fair Trade Commission
                      or a Dispute Conciliation Services Organization selected
                      by the City Mayor. Article 24 (Jurisdiction & Governing
                      Law) ① All e-commerce related lawsuits between the ‘Mall’
                      and a User shall be in accordance with the address of the
                      User at the time of indictment. If an address is
                      nonexistent, then the lawsuit shall fall under exclusive
                      jurisdiction of the district court in the vicinity of
                      User’s place of residence. In the event that the address
                      or residence of the User is not clear at the time of
                      indictment or if User is a foreign resident, the lawsuit
                      shall be filed to the competent court on the Civil
                      Procedures Code. ② Any and all e-commerce-related lawsuits
                      between the ‘Mall’ and a User shall be governed by the law
                      of the Republic of Korea.
                    </div>
                    <b style={{ marginRight: "5px" }}>
                      I have read and agree to the user agreement.
                    </b>
                    <input
                      type="checkbox"
                      id="check1"
                      checked={ageCheck}
                      onChange={ageBtnEvent}
                      style={{ marginRight: "5px" }}
                    />
                    <label>Yes</label>
                  </td>
                </tr>
                <tr>
                  <td
                    style={{ padding: "10px", border: "1px solid lightgray" }}
                  >
                    <b>Collection and Use of Personal Information (Required)</b>
                    <br />
                    <br />

                    <div
                      style={{
                        overflowY: "scroll",
                        width: "300px",
                        height: "150px",
                        padding: "10px",
                        backgroundColor: "#EEEEEE",
                      }}
                    >
                      1. Purposes of Collection and Use of Personal Information
                      A. Contract fulfillment obligated by provision of services
                      and settlement of payment for the services provided Supply
                      of content, purchase and payment, delivery of goods or
                      billing statements and others, user authentication for
                      financial transactions and financial services B. Member
                      management User authentication to access members-only
                      service, identity verification, prevention of unauthorized
                      or illegal use, membership subscription check, validation
                      of user age, confirmation of consent/agreement from legal
                      representative for users under the age of 14, handling of
                      complaints and civil affairs, delivery of notices 2. Types
                      of Personal Information Collected : user ID, password,
                      E-mail address, personal information of legal
                      representative for users under the age of 14 3. Duration
                      of Retention and Use of Personal Information As a general
                      rule, once the personal data has fulfilled the purposes
                      for which they were collected, they will be discarded
                      without delay. However, it shall be retained for a
                      specified period of time due to the reasons mentioned
                      below. A. Duration of Retention and Use of Personal
                      Information Retention pursuant to prevention of illegal
                      transaction and internal shopping mall: OO years B.
                      Retention pursuant to applicable laws o Records on
                      contracts or withdrawal of offers and the like: - Reasons
                      of retention: Act on Consumer Protection in the Electronic
                      Commerce Transactions, Etc. - Retention Period : 5 years o
                      Records on payment settlement and supply of goods etc. -
                      Reasons of retention: Act on Consumer Protection in the
                      Electronic Commerce Transactions, Etc - Retention Period :
                      5 years o Records on processing of customer disputes and
                      complaints - Reasons of retention: Act on Consumer
                      Protection in the Electronic Commerce Transactions, Etc -
                      Retention Period : 3 years o Log records - Reasons of
                      retention: Communication Privacy Act - Retention Period :
                      3 months ※ If you do not accept these terms, you will not
                      be able to create an account with us.
                    </div>

                    <b style={{ marginRight: "5px" }}>
                      I have read and agree to the user agreement.
                    </b>
                    <input
                      type="checkbox"
                      id="check1"
                      checked={useCheck}
                      onChange={useBtnEvent}
                      style={{ marginRight: "5px" }}
                    />
                    <label>Yes</label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button
                      onClick={onJoin}
                      style={{
                        width: "100%",
                        backgroundColor: "black",
                        color: "white",
                        fontSize: "13px",
                        height: "31px",
                        marginTop: "5px",
                      }}
                    >
                      JOIN US
                    </button>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
