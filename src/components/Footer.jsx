import React from 'react'

const Footer = () => {
  return (
    <div id = "Contact" className="flex-row justify-evenly text-center align-center gap-16">
      <div>
        <div className=" text-2xl font-bold text-white text-center pb-5">Social</div>
        <div className=" flex flex-row justify-evenly align-middle items-center pr-2 pt-3.5">
          <a href="https://www.linkedin.com/in/vishwas-patel-7462aa299/"><img className=" size-10 md:size-16" alt="LinkedIn" src="./public/img/linkedin.jpeg"></img></a>
          <a href="https://github.com/vish2285"><img className=" size-10 md:size-16" alt="github" src="./public/img/github.jpeg"></img></a>
          <a href="https://discord.com/users/787798291961610260"><img className=" size-10 md:size-16" alt="Discord" src="./public/img/discord.jpeg"></img></a>
        </div>
      </div>
      <div className=" font-bold text-sm text-center align-text-bottom pt-16 pb-5">
        <p><a target = "_blank" href="/img/Vishwas_Patel_Resume (1).pdf"><u>Here</u></a> is my Resume</p>
        <p>© 2024 Vishwas Patel <a href="mailto:vishwas2284@gmail.com">or <u>Email Me</u></a></p>
      </div>
    </div>
  )
}

export default Footer