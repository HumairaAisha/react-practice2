/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Contact = () => {
  return (
    <div>
      <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 ">
      
        <form method="POST"action="https://getform.io" className="flex flex-col max-w-[600px] w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#8892b0] text-gray-300 ">Contact</p>
            <p className="text-gray-300 py-4">// Have an amazing projects or opportunity for me submit the form below or email me at:ai@gmail.com</p>
          </div>

          <input className="p-2 bg-[#c7cfeb]" type="text" placeholder="Your Name" name="name" />
          <input className="my-4 p-2 bg-[#c7cfeb]" type="email" placeholder="Email" name="email" />
          <textarea className="bg-[#c7cfeb] p-2" name="Message" rows="10" placeholder="Message"></textarea>

         {/* Social Icons */}
       <div className="flex items-center justify-center hover:ml-[-10px] duration-300 py-2 md:hidden">
            <a href="/">
              <FaLinkedin className="bg-white mr-4" size={30} />
            </a>
            <a href="/">
              <FaGithub className="bg-white mr-4" size={30} />
            </a>
            <a href="/" >
              <HiOutlineMail className="bg-white mr-4" size={30} />
            </a>
            <a href="/" >
              <BsFillPersonLinesFill className="bg-white mr-4" size={30} />
            </a>
        </div>

          <button className="text-white border-2 hover:bg-[#8892b0] hover:border-[#8892b0] px-4 py-2 my-4 mx-auto flex items-center">Let's Connect</button>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;
