const BouncingDotsLoader = ({ isLoadingData }) => {
    return (
        <>
            {isLoadingData && <div className="bouncing-loader">
                <div></div>
                <div></div>
                <div></div>
            </div>}

        </>
    );
};

export default BouncingDotsLoader;