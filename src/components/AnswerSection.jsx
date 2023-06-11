const AnswerSection = ({ storedValues, clearAnswersEvent }) => {
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <>
            {storedValues.length > 0 && <div className="divider">
                <hr className="hr-line" />
                <a href='#' onClick={() => clearAnswersEvent()} className="clearanswer">clear</a>
            </div>}


            <div className="answer-container">
                {storedValues.map((value, index) => {
                    return (
                        <div className="answer-section" key={index}>
                            <p className="question">{value.question}</p>
                            <div className="answer"><p>{value.answer}</p>
                                <p className="response-metadata"><i>This took {(value.timeUsage / 1000).toFixed(3)}s and using {value.tokensUsage} tokens in total</i></p></div>
                            <div className="copy-icon" onClick={() => copyText(value.answer)}>
                                <i className="fa fa-solid fa-copy"></i>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default AnswerSection;