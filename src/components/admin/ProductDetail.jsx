import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProduct, getAllProductFunction } = context;


    const navigate = useNavigate()
    const deleteProduct = async (id) => {
        setLoading(true)
        try {
            await deleteDoc(doc(fireDB, 'products', id))
            toast.success('Product Deleted successfully')
            getAllProductFunction();
            setLoading(false)
            toast.success('Deleted Successfully')
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }
    

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="py-5 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-pink-600">All Products</h1>
                <Link to={'/addproduct'}>
                    <button className="px-4 py-2 bg-pink-100 text-pink-600 border border-pink-200 rounded-lg hover:bg-pink-200 transition duration-300">
                        Add Product
                    </button>
                </Link>
            </div>

            {loading && <Loader />}

            <div className="w-full overflow-x-auto mb-5">
                <table className="w-full text-left border border-collapse sm:border-separate border-pink-200 text-pink-600">
                    <thead>
                        <tr className="bg-pink-100">
                            <th className="px-6 py-3 text-sm font-semibold border-l border-pink-200">S.No.</th>
                            <th className="px-6 py-3 text-sm font-semibold border-l border-pink-200">Image</th>
                            <th className="px-6 py-3 text-sm font-semibold border-l border-pink-200">Title</th>
                            <th className="px-6 py-3 text-sm font-semibold border-l border-pink-200">Price</th>
                            <th className="px-6 py-3 text-sm font-semibold border-l border-pink-200">Category</th>
                            <th className="px-6 py-3 text-sm font-semibold border-l border-pink-200">Date</th>
                            <th className="px-6 py-3 text-sm font-semibold border-l border-pink-200">Action</th>
                            <th className="px-6 py-3 text-sm font-semibold border-l border-pink-200">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllProduct.map((item, index) => {
                            const { id, title, price, category, date, productImageUrl } = item;
                            return (
                                <tr key={index} className="border-t border-pink-200">
                                    <td className="px-6 py-4 text-sm font-medium">{index + 1}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex justify-center">
                                            <img className="w-20 h-20 object-cover" src={productImageUrl} alt="" />
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">{title}</td>
                                    <td className="px-6 py-4">₹{price}</td>
                                    <td className="px-6 py-4">{category}</td>
                                    <td className="px-6 py-4">{date}</td>
                                    <td className="px-6 py-4">
                                        <button onClick={()=>navigate(`/updateproduct/${id}`)}  className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                                            Edit
                                        </button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={()=> deleteProduct(id)} className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductDetail;
