import React, { useEffect, useRef, useState } from "react";
import Fade from "react-reveal/Fade";
import { PlusOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Form, Input, Select, Upload, Modal, Button } from "antd";
import axios from "axios";
import { AiFillExclamationCircle, AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setSchModal } from "../redux/schModalSlice.js";
import { useSelector } from "react-redux";
import { TiTick } from "react-icons/ti";
import { setFormModal } from "../redux/formModalSlice.js";
import { UploadForm } from "./Form.js";


const ScholarshipForm = () => {
  //   const { TextArea } = Input;
  //   const [fileList, setFileList] = useState([]);
  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [marksheethash, setMarksheethash] = useState();
  const [passporthash, setPassporthash] = useState();

  const [isPassport, setIsPassport] = useState(false);
  const [isMarkSheet, setIsMarkSheet] = useState(false);
  const [data, setData] = useState([]);
  const schModal = useSelector((state) => state.schModal)
  const formModal = useSelector((state => state.formModal))
  const [dropdown2, setDropdown2] = useState(schModal.defname);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const handleSubmit = async () => {
    try {
      const scholarshipNumber=schModal.schNo;
      // const scholarshipNumber=5435454;
      const body = { "Name": user.username, "Collegename": college, "YoG": dropdown, cgpa, "scholarshipEmail": user.useremail, "Degree": dropdown2,scholarshipNumber , "MarksheetHash": marksheethash, "PassportHash": passporthash };
      console.log(JSON.stringify(body));
      await fetch("http://localhost:8000/applyforscholarship", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }).then((res) => {
        // console.log(res);
        dispatch(setSchModal(false))
        return res.json()
      }).then((data) => {
        console.log(data);
      });
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    const url = "http://localhost:8000/getfilesbyuser";
    const fetchData = async () => {
      try {
        setData([]);
        const fileEmail = user.useremail;
        const body = { fileEmail };

        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        })
        const json = await response.json();
        const files = []
        for (const i in json) {
          files.push(json[i].value);

        }
        setData(files)


      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [formModal.isFormModal])
  // setData(data);
  useEffect(() => {
    data.map((file) => {
      console.log(file.docType);
      if (file.docType === "Passport") {
        setIsPassport(true);
        setPassporthash(file.hash);
      }
      else if (file.docType === "Marksheet") {
        setIsMarkSheet(true);
        setMarksheethash(file.hash);
      }
    })
  }, [data])

  const handleMarksheet = (e) => {
    e.preventDefault();
    if (isMarkSheet === true) {
      document.getElementById("marksheet").innerHTML = "<span style='color: red;'>Document Already Submitted!<span><TiTick /></span></span>";
    } else { dispatch(setFormModal(true)) }
  }

  const handlePassport = (e) => {
    e.preventDefault();
    if (isPassport === true) {
      document.getElementById("passport").innerHTML = "<span style='color: red;'>Document Already Submitted!<span><TiTick /></span></span>";
    } else { dispatch(setFormModal(true)) }
  }

  const oncrossclick = () => {
    dispatch(setSchModal(false));
  };
  return (
    <div className="absolute flex items-center justify-center top-0 min-w-full min-h-screen font-raleway">
      <Fade bottom>
        <div className="h-[48rem] w-[32rem] rounded-xl flex flex-col items-center justify-center  bg-white p-20 shadow-2xl ">
          <div className="flex justify-end w-[32rem] pr-5 pt-10">
            {" "}
            <AiOutlineClose size={20} onClick={oncrossclick} />
          </div>
          <div className="text-[30px] font-bold">SCHOLARSHIP FORM</div>

          <Form
            labelCol={{
              span: 30,
            }}
            wrapperCol={{
              span: 50,
            }}
            labelAlign="left"
            layout="vertical"
          >
            <Form.Item label="Enter Full Name">
              <Input value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            <Form.Item label="Enter College Name">
              <Input value={college} onChange={(e) => setCollege(e.target.value)} />
            </Form.Item>
            <Form.Item label="Select Year of Graduation">
              <Select value={dropdown} onChange={(e) => setDropdown(e)}>
                <Select.Option value="2022">2022</Select.Option>
                <Select.Option value="2023">2023</Select.Option>
                <Select.Option value="2024">
                  2024
                </Select.Option>
                <Select.Option value="2025">2025</Select.Option>
                <Select.Option value="2026">2026</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Select Scholarship Scheme">
              <Select style={{ width: 300 }} value={dropdown2} onChange={(e) => setDropdown2(e)}>
                <Select.Option value="ABV">Atal Bihari Vajpayee General Scholarship</Select.Option>
                <Select.Option value="SJS">Suborno Jayanti Scholarship</Select.Option>
                <Select.Option value="APJ">Dr. Kalam Commonwealth Scholarship </Select.Option>
                <Select.Option value="NMS">Nehru Memorial Scholarship</Select.Option>
                <Select.Option value="SRC">Dr. S. Radhakrishnan Cultural Exchange Scholarship</Select.Option>
                <Select.Option value="ASS">Africa Scholarship Scheme</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Enter CGPA (out of 10)">
              <Input value={cgpa} onChange={(e) => setCgpa(e.target.value)} />
            </Form.Item>
            <Form.Item label="Passport Status">
              <Button onClick={(e) => { handlePassport(e) }} id="passport">Check Passport Status</Button>
            </Form.Item>
            <Form.Item label="Marksheet Status">
              <Button onClick={(e) => { handleMarksheet(e) }} id="marksheet">Check 12th Marksheet Status
              </Button>
            </Form.Item>
          </Form>
          <div className="mt-4">
            <button
              className=" bg-white hover:bg-bgblue duration-200 hover:text-white px-4 py-2 rounded-2xl text-[16px] font-semibold"
              onClick={handleSubmit}
            >
              Apply
            </button>
          </div>
        </div>
      </Fade>
      {formModal.isFormModal ? (
        <UploadForm />
      ) : (<div></div>)}
    </div>
  );
};

export default ScholarshipForm;
