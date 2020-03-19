import React,{useState} from 'react';
import Faqs from './Faqs';

//  const FAQ = () => {
//      const [faqs, setfaqs] = useState([{
//          question:"how much do I need to purchase a home and a car",
//          answer:"epends with the car that you want and the type and location of the house",
//          open:true
//      },
//      {
//         question:"how much do I need to purchase a home and a car",
//         answer:"epends with the car that you want and the type and location of the house",
//         open:true
//     },
//     {
//         question:"how much do I need to purchase a home and a car",
//         answer:"epends with the car that you want and the type and location of the house",
//         open:true 
//     }
// ]);
//     return (
//     <div className="faqapp">
//       {faqs.map((faq,i)=>(
//                <div>
//                    {faq.question}
//                </div>
//     ))}
            
//         </div>
//     )
// }
// export default FAQ;
function FAQ () {
    const [faqs, setfaqs] = useState([
      {
        question: 'How many programmers does it take to screw in a lightbulb?',
        answer: 'None. We don\'t address hardware issues.',
        open: true
      },
      {
        question: 'Who is the most awesome person?',
        answer: 'You. The Viewer.',
        open: false
      },
      {
        question: 'How many questions does it take to make a successful FAQ Page?',
        answer: 'This many.',
        open: false
      },
       {
        question: 'Who is the most awesome person?',
        answer: 'You. The Viewer.',
        open: false
      },
      {
        question: 'Who is the most awesome person?',
        answer: 'You. The Viewer.',
        open: false
      },
    ]);
  
    const toggleFAQ = index => {
      setfaqs(faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open
        } else {
          faq.open = false;
        }
  
        return faq;
      }))
    }
  
  
    return (
      <div className="App">
        <header>
		      	<h1>FAQ Page</h1>
		     </header>

        
        <div className="faqs">
          {faqs.map((faq, i) => (
            <Faqs faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </div>
    );
  }
  
  export default FAQ;