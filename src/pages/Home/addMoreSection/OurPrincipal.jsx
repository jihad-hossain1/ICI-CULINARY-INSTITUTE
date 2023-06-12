
import imgPrin from '../../../assets/principal.jpeg'
import { Button, Modal } from "antd";
import { useState } from "react";


const OurPrincipal = () => {
 const [isModalOpen, setIsModalOpen] = useState(false);
 const showModal = () => {
   setIsModalOpen(true);
 };
 const handleOk = () => {
   setIsModalOpen(false);
 };
 const handleCancel = () => {
   setIsModalOpen(false);
 };
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 shadow-md rounded-lg p-10">
          <img src={imgPrin} className="object-cover" alt="" />
          <div className="flex flex-col justify-center bg-green-200 p-4 space-y-5 bg-opacity-30">
            <div className="">
              <h3 className="text-4xl font-bold text-gray-600">
                About Our Principal
              </h3>
            </div>
            <p className="text-xl">
              Daniel Chandan Gomes’ culinary career began in early 1996,
              inspired by his Executive Gardmeger Chef father Michel Nirmol
              Gomes and his family’s love and respect for quality and tradition.
              After completing his training on Food & Beverage and Food Safety
              from NHTTI (famously known as Bangladesh Parjatan Corporation) and
              HACCP, ITT Sheraton Hotel Dhaka respectively, Mr. Daniel sought
              opportunities to further develop his own passion and creativity.
            </p>
            <div>
              <button
                onClick={showModal}
                className="text-white px-5 py-2 bg-green-600 rounded-md hover:shadow-md"
              >
                More Details
              </button>
            </div>
            {/* modal  */}
            <Modal
              title="Principal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <h2 className="text-3xl font-extrabold">
                MasterChef Daniel C Gomes
              </h2>
              <p>Executive Corporate Head</p>
              <p className="text-lg font-bold">Biography</p>
              <p>
                Daniel Chandan Gomes’ culinary career began in early 1996,
                inspired by his Executive Gardmeger Chef father Michel Nirmol
                Gomes and his family’s love and respect for quality and
                tradition. After completing his training on Food & Beverage and
                Food Safety from NHTTI (famously known as Bangladesh Parjatan
                Corporation) and HACCP, ITT Sheraton Hotel Dhaka respectively,
                Mr. Daniel sought opportunities to further develop his own
                passion and creativity. Mr. Daniel’s culinary method flourished
                during Industrial Attachment at Dhaka Sheraton Hotel followed by
                Sofitel City Center Hotel & Residence Dubai, the United Arab
                Emirates as Commis 1, where he further refined his culinary
                techniques. He proceeded to Pan Pacific Group, Japan, and later
                in the Hot Range at Oberoi Grand Hotel (A five Star Deluxe Hotel
                in Calcutta, India) where he served as the Demi-Chef-De-Partie.
                He extended his skills by joining Gulf Hotel, Bahrain, and Beach
                Rotana Hotel, Abu Dhabi, U.A.E. pleasing the hotel’s most
                exclusive clientele. After spending years abroad, Chef Daniel
                returned to his motherland to take on the role of Executive
                Senior Sous Chef in Sheraton Hotel Dhaka, Bangladesh. He
                continued to be Executive Sous Chef and Executive Chef at Best
                
              </p>
              <p className="text-lg font-bold">Education</p>
              <ol className="list-disc">
                <li>
                  Bachelor's in Hospitality Management (Culinary Arts) from
                  A.M.S Calcutta India, Class of 1996 (4 Year Graduation)
                </li>
                <li>Class Xll 1992 Donboscco, Calcutta, India</li>
                <li>Class X 1989 Donboscco, Calcutta, India</li>
              </ol>
              <p className="text-lg font-bold">Professional Qualification</p>
              <ol className="list-disc">
                <li>
                  Completed a Basic Cabin Crew Training in FRANK FINN MANAGEMENT
                  CONSULTANTS Calcutta, India. From 7thJuly to 7th August 1997
                </li>
                <li>
                  Completed a Food Safety Training Program by HACCP, in ITT
                  Sheraton Hotel Dhaka from 15/04/2003 to 22nd April 2003. 
                  Completed a Basic Cabin Crew Training in FRANK FINN MANAGEMENT
                  CONSULTANTS Calcutta, India. From 7thJuly to 7th August 19
                </li>
                <li>
                  Completed Industrial Attachment in ITT Sheraton Hotel Dhaka
                  from 15/02/1990 to 15/05/1990
                </li>
                <li>
                  Completed 6 months Basic Food & Beverage Production Course in
                  NHTTI Bangladesh Parjatan Corporation Dhaka from 31/07/1989 to
                  01/02/1990
                </li>
              </ol>
            </Modal>
          </div>
        </div>
      </div>
    );
};

export default OurPrincipal;