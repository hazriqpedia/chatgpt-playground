import { useState } from 'react';

const FormSection = ({ generateResponse }) => {
    const [inputs, setInputs] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        if (name === 'endpoint') {
            // Clearing the masked endpoint when the user starts typing
            setInputs(values => ({ ...values, ['endpointMasked']: '' }))
        }
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        generateResponse(inputs, setInputs)
    }

    const handleMaskingData = (event) => {
        // mask the whole string by showing only the last 17 characters
        const maskedEndpoint = event.target.value.replace(/.(?=.{17})/g, '•')
        setInputs(values => ({ ...values, ['endpointMasked']: maskedEndpoint }))
    }


    return (
        <div className="form-section">
            <form onSubmit={handleSubmit}>
                <div className="form-section-credentials">
                    <input type="text" className="form-control-creds" placeholder="Azure OpenAI Endpoint" name="endpoint" value={inputs.endpointMasked || inputs.endpoint || ""} onChange={handleChange} onBlur={handleMaskingData} />
                    <input type="password" className="form-control-creds" placeholder="Azure OpenAI Key" name="key" value={inputs.key || ""} onChange={handleChange} />

                </div>
                <textarea
                    rows="5"
                    className="form-control"
                    placeholder="Try your prompts here.."
                    name="prompt"
                    value={inputs.prompt || ""}
                    onChange={handleChange}
                ></textarea>
                <input type="submit" className="btn" value="Generate Response 🤖" />
            </form>
            <p className="credit-section"><i>H.</i></p>
        </div >
    )
}

export default FormSection;