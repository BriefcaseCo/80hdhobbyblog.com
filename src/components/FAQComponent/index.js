import React, { useState, useEffect } from 'react';

const FAQComponent = () => {
    const [currentFAQIndex, setCurrentFAQIndex] = useState(0);

const faqs = [
  {
      question: "What range of technologies does OnlyDans International Consulting specialize in?",
      answer: "We specialize in a wide range of technologies including Linux, AWS, Python, Docker, Kubernetes, machine learning, and more."
  },
  {
      question: "How can OnlyDans International Consulting assist in cloud computing solutions?",
      answer: "We offer expertise in cloud computing, providing solutions for cloud infrastructure, deployment, and cloud-based application development."
  },
  {
      question: "What experience does Dan Ward have in data analytics?",
      answer: "Dan Ward brings extensive experience in data analytics, offering insights and strategies for data-driven decision-making and reporting."
  },
  {
      question: "Can OnlyDans International Consulting provide services in mobile and web application development?",
      answer: "Yes, we offer services in both frontend and backend development for web and mobile applications, including SEO and Unity Game Development."
  },
  {
      question: "Does OnlyDans International Consulting offer training in IT skills?",
      answer: "Yes, we provide comprehensive staff training to enhance IT skills in various technologies and software solutions."
  },
  {
      question: "What programming languages does Dan Ward have expertise in?",
      answer: "Dan is skilled in multiple programming languages including Python, PHP, Java, .NET, and JavaScript frameworks like React and NodeJS."
  },
  {
      question: "How does OnlyDans International Consulting approach project management?",
      answer: "Our approach is grounded in strong leadership and management, ensuring successful project execution from cloud solutions to custom software development."
  },
  {
      question: "Can OnlyDans International Consulting help with DevOps and continuous integration?",
      answer: "Absolutely, we specialize in DevOps practices, including tools like Docker, Kubernetes, and continuous integration and deployment pipelines."
  },
  {
      question: "What industries does OnlyDans International Consulting have experience with?",
      answer: "Our expertise spans various industries including transport & logistics, telecom, healthcare technology, and the fuel industry."
  },
  {
      question: "How does OnlyDans International Consulting handle data management and analytics?",
      answer: "We utilize tools like MySQL, PowerBI, TensorFlow, and Keras to provide advanced data management and analytical solutions."
  },
  {
      question: "What hardware and networking solutions are offered?",
      answer: "We provide solutions involving ESP32, Arduino, Raspberry Pi, and various communication protocols like RS232 and RS485."
  },
  {
      question: "Can OnlyDans International Consulting assist with POS systems?",
      answer: "Yes, we offer tailored solutions for Point of Sale systems, enhancing transaction efficiency in the retail and service industries."
  },
  {
      question: "Is OnlyDans International Consulting experienced in music streaming technologies?",
      answer: "Indeed, we have expertise in developing and enhancing technology solutions for the music streaming industry."
  },
  {
      question: "How does OnlyDans International Consulting ensure software quality?",
      answer: "We employ rigorous testing and debugging methodologies, including application debugging and software life cycle management."
  },
  {
      question: "How can I contact OnlyDans International Consulting for a project?",
      answer: "You can reach out via email at dddanmar@gmail.com or call us at 0421 938 656 to discuss your project needs."
  },

  {
      question: "What services does OnlyDans International Consulting offer?",
      answer: "We offer a range of services including cloud solutions, data analytics, managed IT services, and more."
  },
  {
      question: "How does Elevate differ from other ERP and CRM systems?",
      answer: "Elevate is uniquely designed for modularity and easy reskinning, focusing on third-party integrations and adaptability to various business domains."
  },
  {
      question: "Is Elevate suitable for small businesses?",
      answer: "Absolutely, Elevate's modular design makes it an excellent choice for businesses of all sizes, including small enterprises."
  },
  {
      question: "Can I request a custom feature in Elevate?",
      answer: "Yes, we can work with you to develop custom features that meet your specific business needs."
  },
  {
      question: "How long does it take to implement Elevate in my business?",
      answer: "The implementation time can vary depending on your specific requirements and the complexity of the integration."
  },
  {
      question: "Is training provided for Elevate?",
      answer: "Yes, we offer comprehensive training to ensure your team can fully utilize all features of Elevate."
  },
  {
      question: "How does OnlyDans International Consulting approach project management?",
      answer: "Our approach focuses on clear communication, goal alignment, and efficient execution to ensure project success."
  },
  {
      question: "What support options are available for Elevate?",
      answer: "We offer various support options including email, phone support, and dedicated account management."
  },
  {
      question: "How secure is Elevate?",
      answer: "Elevate is built with security as a top priority, incorporating the latest security protocols to protect your data."
  },
  {
      question: "Can Elevate integrate with existing systems?",
      answer: "Yes, Elevate is designed to seamlessly integrate with a variety of existing business systems and platforms."
  },
  {
      question: "What is the pricing model for Elevate?",
      answer: "Pricing varies based on the specific needs of your business. Contact us for a detailed quote."
  },
  {
      question: "Do you offer custom development services?",
      answer: "Yes, we offer custom software development services tailored to your unique business requirements."
  },
  {
      question: "How is customer data handled and protected in Elevate?",
      answer: "Customer data is handled with strict confidentiality and is protected using advanced data security measures."
  },
  {
      question: "What makes OnlyDans International Consulting stand out in the IT consulting market?",
      answer: "Our diverse expertise, commitment to client success, and innovative approach set us apart in the IT consulting market."
  },
  {
      question: "How can I get started with OnlyDans International Consulting?",
      answer: "Contact us via email or phone to discuss your needs and how we can assist you."
  }
];


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFAQIndex((currentFAQIndex) => (currentFAQIndex + 1) % faqs.length);
        }, 3000); // Change FAQ every 3 seconds

        return () => clearInterval(interval);
    }, [faqs.length]);

    return (
        <div className="bg-white py-12">
            <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
                <div className="faq-container">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="mt-8">
                        <div key={faqs[currentFAQIndex].question} className="transition-all transform hover:scale-105">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{faqs[currentFAQIndex].question}</h3>
                            <p className="mt-2 text-base text-gray-500">{faqs[currentFAQIndex].answer}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQComponent;

