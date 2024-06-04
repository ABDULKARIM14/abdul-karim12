'use client'
import React, { useState } from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ChatIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import PortfolioDisplay from '@/app/component/portfolio/portfolioDisplay'
import { FormValues } from '@/app/state/initialState'

export default function Index() {
    const formValues: FormValues = {
        userInfo: {
            name: 'Abdul karim',
            title: 'Software Developer',
            bio: `software developer specializing full-stack practices. 
            Proficient in building CI/CD pipelines and deploying applications to Microsoft Cloud. 
            Passionate about microservices architecture and committed to continuous learning.
            Eager to collaborate and contribute to team success.`,
        },
        isTechStack: true,
        techStack: [
                FRESHER 
        ],
        isExperience: true,
        isContact: true,
        contact: [
            {
                app: 'LinkedIn',
                icon: <LinkedInIcon />,
                link: 'https://www.linkedin.com/in/abdul-karim-5172252a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app,
            },
            {
                app: 'Whatsapp',
                icon: <ChatIcon />,
                link: 'https://wa.me/6381796586',
            },
            { app: 'Email', icon: <EmailIcon />, link: '@gmail.com' },
        ],
        isProject: true,
        projects: [
    
        ],
       
    }

    return <PortfolioDisplay formProps={formValues} />
}
