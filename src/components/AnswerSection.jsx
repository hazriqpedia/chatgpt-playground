const AnswerSection = ({ storedValues }) => {
    const copyText = (text) => {
        navigator.clipboard.writeText(text);
    };
    return (
        <>
            {storedValues.length > 0 && <hr className="hr-line" />}
            <div className="answer-container">
                {storedValues.map((value, index) => {
                    return (
                        <div className="answer-section" key={index}>
                            <p className="question">{value.question}</p>
                            <div className="answer"><p>{value.answer}</p>
                                <p className="response-metadata"><i>This took {value.timeUsage / 1000}s and using {value.tokensUsage} tokens in total</i></p></div>
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