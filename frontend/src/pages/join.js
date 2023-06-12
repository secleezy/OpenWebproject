import "./UserInterface.css"; //내가만든 css 가져오기
import React, { useState, useEffect } from 'react'; //리액트 동적변수 사용
import { Link, useNavigate } from "react-router-dom";


export default function Join() {
    const API_URL = '/api/users/';

    const [email, setEmail] = useState("");
    const [pw, setpw] = useState("");
    const [verifypw, setverifypw] = useState("");
    const [id, setid] = useState("");
    const [name, setname] = useState("");

    const [allCheck, setAllCheck] = useState(false);
    const [ageCheck, setAgeCheck] = useState(false);
    const [useCheck, setUseCheck] = useState(false);

    const [emaildomain, setemaildomain] = useState("");
    const [disable, setDisable] = useState(false);
    const [stylechange, setstylechange] = useState('gray');

    const navigate = useNavigate();

    const [termsText, setTermsText] = useState("");
    const [privacyText, setPrivacyText] = useState("");
    let realemail = "";

    let checkedID = false; //id 중복체크함?


    const checkIDverify = () => {
        const idRegExp = /^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{4,16}$/;
        if (!idRegExp.test(id)) {
            alert("Please make id in the correct format.");
            return;
        }

        fetch(`${API_URL}${id}`)
            .then(response => response.text())
            .then(data => {
                console.log(data);
                if (data == "null") {
                    alert("This ID is available.");
                    setDisable(true);
                    setstylechange('lightgray');
                }
                else {
                    alert("This ID is not available.");
                    setDisable(false);
                    setstylechange('red');
                }
            })
            .catch(error => {
                alert("Server Error.");
                setstylechange('red');
            });
    }



    const onJoin = () => {
        realemail = email + "@" + emaildomain;
        const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/

        console.log(disable);

        if (!id || !disable) {
            alert("Please check ID.");
            return;
        }

        if (!name) {
            alert("Please check name.");
            return;
        }

        if (!ageCheck) {
            alert("Please check Terms and Conditions.");
            return;
        }

        if (!useCheck) {
            alert("Please check Collection and Use of Personal Information.");
            return;
        }

        if (!email) {
            alert("The email address you have entered is not available.");
            return;
        }

        if (emaildomain === "") {
            alert("Please select domain of email.");
            return;
        }

        if (!pw) {
            alert("Password is required.");
            return;
        }

        if (!regex.test(pw)) {
            alert("Please check password.");
            return;
        }

        if (!verifypw) {
            alert("Password verify is required.");
            return;
        }

        if (pw !== verifypw) {
            alert("Please verify check password.");
            return;
        }

        fetch(API_URL + "signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: name,
                email: realemail,
                password: pw
            })
        })

        // At this point all the checks have passed, we can proceed with the successful operation.
        navigate('/successjoin', { state: { id: id, email: realemail } });
    };


    const onemailChange = (e) => {
        setEmail(e.target.value);
    };

    const onemaildomailChange = (e) => {
        setemaildomain(e.target.value);
    }

    const onidChange = (e) => {
        setid(e.target.value);
    }

    const onnameChange = (e) => {
        setname(e.target.value);
    }

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
            setAgeCheck(true)
        } else {
            setAgeCheck(false)
        }
    };

    const useBtnEvent = () => {
        if (useCheck === false) {
            setUseCheck(true)
        } else {
            setUseCheck(false)
        }
    };


    useEffect(() => {
        if (ageCheck === true && useCheck === true) {
            setAllCheck(true)
        } else {
            setAllCheck(false)
        }
    }, [ageCheck, useCheck])

    useEffect(() => {
        fetch('./terms.txt')
            .then(response => response.text())
            .then(data => {
                setTermsText(data);
            });
    }, []);

    useEffect(() => {
        fetch('./privacy.txt')
            .then(response => response.text())
            .then(data => {
                setPrivacyText(data);
            });
    }, []);


    return (
        <div>
            <Link to='/'><img src="images/logo.png" alt="BigCo Inc. logo" style={{ width: '200px', margin: '30px', marginBottom: '40px' }} /></Link><br />

            <div class="join" style={{ width: '100%', textAlign: 'center' }}>

                <table style={{ display: 'inline-block' }}>
                    <tr>
                        <td style={{ width: '250px', textAlign: 'left' }}>
                            <b>Basic information</b>
                        </td>

                        <td style={{ width: '50px' }}>
                        </td>

                        <td style={{ width: '250px', textAlign: 'left' }}>
                            <b>AGREE ALL</b><br />
                        </td>
                    </tr>
                    <tr style={{ height: '25px' }}></tr>
                    <tr>
                        <td style={{ width: '250px', textAlign: 'left', fontSize: '12px', verticalAlign: 'top' }}>

                            <b>ID <sub style={{ color: 'Blue', fontSize: '12px' }}>*</sub></b><br /> {/*아디필드*/}
                            <input type="text" value={id} onChange={onidChange} maxlength='16' style={{ width: '88%', color: stylechange }} disabled={disable}></input>
                            <button onClick={checkIDverify} style={{ backgroundColor: 'black', color: 'white', height: '28px' }}>Check</button>
                            <br />
                            Check for the availability of the username. [8 to 16 English uppercase and lowercase letters, numbers, and special characters are allowed.]
                            <br /><br />

                            <b>NAME <sub style={{ color: 'Blue', fontSize: '12px' }}>*</sub></b><br /> {/*이름필드*/}
                            <input type="text" value={name} onChange={onnameChange} maxlength='16'></input><br /><br />

                            <b>EMAIL <sub style={{ color: 'Blue', fontSize: '12px', verticalAlign: 'middle' }}>*</sub></b><br />
                            <input type="text" style={{ width: '40%' }} value={email} onChange={onemailChange} maxlength='15'></input>　@　
                            <select class="select" title="이메일 도메인 주소 선택" style={{ width: '40%' }} value={emaildomain} onChange={onemaildomailChange}>
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
                            <br /><br /><br />

                            <b>PASSWORD Required Field <sub style={{ color: 'Blue', fontSize: '12px' }}>*</sub></b><br />
                            <input type="password" value={pw} onChange={onpwChange} maxlength='16'></input><br />
                            [Must contain Upper and lowercase letters/numbers/special characters (8 to 16 characters)] each at least one. (inputable sepcial characters : #?!@$ %^&*-)]
                            <br /><br /><br />

                            <b>CONFIRM PASSWORD Required Field <sub style={{ color: 'Blue', fontSize: '12px' }}>*</sub></b><br />
                            <input type="password" value={verifypw} onChange={onverifypwChange} maxlength='16'></input><br />
                        </td>
                        <td></td>
                        <td style={{ width: '250px', textAlign: 'left', fontSize: '12px' }}>
                            <table>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid lightgray' }}>
                                        <input type="checkbox" id="all-check" checked={allCheck} onChange={allBtnEvent} />
                                        <b style={{ marginLeft: '5px' }}>
                                            Agree to Terms of Use, Privacy Policy, and subscription for shopping information (optional).</b>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid lightgray' }}>
                                        <b>Terms and Conditions (Required)</b>

                                        <br /><br />


                                        <div style={{ overflowY: 'scroll', width: '300px', height: '150px', padding: '10px', backgroundColor: '#EEEEEE' }}>
                                            {termsText}
                                        </div>

                                        <b style={{ marginRight: '5px' }}>I have read and agree to the user agreement.</b>
                                        <input type="checkbox" id="check1" checked={ageCheck} onChange={ageBtnEvent} style={{ marginRight: '5px' }} />
                                        <label>Yes</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '10px', border: '1px solid lightgray' }}>
                                        <b>Collection and Use of Personal Information (Required)</b>
                                        <br /><br />

                                        <div style={{ overflowY: 'scroll', width: '300px', height: '150px', padding: '10px', backgroundColor: '#EEEEEE' }}>
                                            {privacyText}
                                        </div>

                                        <b style={{ marginRight: '5px' }}>I have read and agree to the user agreement.</b>
                                        <input type="checkbox" id="check1" checked={useCheck} onChange={useBtnEvent} style={{ marginRight: '5px' }} />
                                        <label>Yes</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button onClick={onJoin} style={{ width: '100%', backgroundColor: 'black', color: 'white', fontSize: '13px', height: '31px', marginTop: '5px' }}>JOIN US</button>
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