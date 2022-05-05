import React from 'react';

function ProductItem(props) {
    return (
        <div>
            <div className="shadow">
                <div className="p-3">
                    <img className=" w-full h-72 object-cover"
                         src="https://i.pinimg.com/originals/b9/43/f3/b943f3b29a03adaf5b7aa0a2fe371fa1.gif" alt=""/>
                    <div>
                        <h6 className="text-lg font-bold ">Meme </h6>
                        <p className="text-md font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusamus asperiores est maiores possimus repellendus repudiandae!</p>
                    </div>
                </div>
                <div class="p-6 text-grey-darker text-justify flex flex-row justify-between border-t">
                    <button
                        class="uppercase self-end text-blue text-sm hover:text-blue-dark duration-4 self-center bg-red-400">details
                    </button>
                    <button
                        class="uppercase self-end bg-green font-bold text-white  rounded hover:bg-green-dark duration-4 bg-red-400 ml-5">
                        <i class="fa fa-cart-plus mr-4"></i>Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;