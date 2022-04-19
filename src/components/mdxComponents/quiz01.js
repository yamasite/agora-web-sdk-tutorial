import Quiz from 'react-quiz-component';

const quiz = {
    "quizTitle": "Quiz",
    "questions": [
      {
        "question": "如何检查当前 SDK 的版本号？",
        "questionType": "text",
        "answers": [
          "AgoraRTC.getSdkVersion",
          "AgoraRTC.checkSystemRequirements",
          "AgoraRTC.VERSION"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },

      {
        "question": "如何检查 SDK 是否兼容当前浏览器？",
        "questionType": "text",
        "answers": [
            "AgoraRTC.getSdkVersion",
            "AgoraRTC.checkSystemRequirements",
            "AgoraRTC.VERSION"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      }
    ]
  }

const quiz01 = () => (
    <Quiz quiz={quiz} showInstantFeedback={true} shuffle={false} continueTillCorrect={true}/>
);

export default quiz01;

