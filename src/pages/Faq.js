import Question from '../Components/Question';
import '../style.css';

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 2,
    title: "How much does it cost?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 3,
    title: "When can I get it?",
    info:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  }
];

export default function Faq(){
  return (
    <>
    <h1>Project 2 : Faq/Accordion</h1>
    <div className="container">
      <h2>Frequently Asked Question</h2>
      <div className = "questions">
     {questions.map((question)=>
     <Question key={question.id} question={question}/>
     )}
      </div>

    </div>
    </>
  )
}