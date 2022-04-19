import Quiz from 'react-quiz-component';

const quiz = {
    "quizTitle": "Quiz",
    "questions": [
      {
        "question": "获取麦克风设备的 getMicrophones 方法是同步方法还是异步方法？",
        "questionType": "text",
        "answers": [
          "同步方法",
          "异步方法",
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },

      {
        "question": "对于 getMicrophones 方法返回的 MediaDeviceInfo 对象，说法正确的是？",
        "questionType": "text",
        "answers": [
            "复用了 WebRTC 的 MediaDeviceInfo 对象",
            "会返回摄像头设备信息",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },

      {
        "question": "对于声网实时音视频 SDK 的轨道，说法正确的是？",
        "questionType": "text",
        "answers": [
            "复用了 WebRTC 的 track 概念",
            "复用了 WebRTC 的 stream 概念",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },

      {
        "question": "如何在网页上播放麦克风音频轨道？",
        "questionType": "text",
        "answers": [
            "调用成员方法 play，无需指定播放对象。",
            "调用成员方法 play 通过 DOM 元素对视频进行渲染。",
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "回答正确！",
        "messageForIncorrectAnswer": "回答错误！",
        "point": "10",
      },

    ]
  }

const quiz03 = () => (
    <Quiz quiz={quiz} showInstantFeedback={true} shuffle={false} continueTillCorrect={true}/>
);

export default quiz03;

