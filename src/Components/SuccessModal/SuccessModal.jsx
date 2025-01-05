// Remove test prop if it's not needed
import groupImage from '../../assets/Group.png'
const SuccessModal = ({ onClose, totalCost }) => {
    console.log('Received totalCost:', totalCost);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white flex items-center flex-col p-6 rounded-lg shadow-lg text-center">
                <img src={groupImage} alt="Success" />
                <h2 className="text-2xl font-bold mb-4">Purchase Successful!</h2>
                <p className="mb-2">Thank you for your purchase.</p>
                <p className="mb-2">Total Cost: ${totalCost}</p> {/* Display totalCost directly */}
                <button
                    onClick={onClose}
                    className="btn bg-primary text-white font-bold rounded-full px-6 py-2"
                >
                    Close
                </button>
            </div>
        </div>
    );
};
export default SuccessModal 