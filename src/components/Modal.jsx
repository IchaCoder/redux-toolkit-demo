import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../redux/features/slice/modalSlice";
import { clearCart } from "../redux/features/slice/cartSlice";

export default function Modal() {
	const dispatch = useDispatch();
	return (
		<aside className="modal-container">
			<div className="modal">
				<h4>remove all items from your shopping cart?</h4>
				<div className="btn-container">
					<button
						type="button"
						className="btn confirm-btn"
						onClick={() => {
							dispatch(clearCart());
							dispatch(closeModal());
						}}
					>
						confirm
					</button>
					<button
						type="button"
						className="btn clear-btn"
						onClick={() => dispatch(closeModal())}
					>
						cancel
					</button>
				</div>
			</div>
		</aside>
	);
}
