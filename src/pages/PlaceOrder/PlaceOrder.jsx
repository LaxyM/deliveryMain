import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Информация о доставке</p>
        <div className="multi-fields">
          <input type="text" placeholder="Имя" />
          <input type="text" placeholder="Фамилия" />
        </div>
        <input type="email" placeholder="Электронная почта" />
        <input type="text" placeholder="Улица" />
        <div className="multi-fields">
          <input type="text" placeholder="Город" />
          <input type="text" placeholder="Штат" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Почтовый индекс" />
          <input type="text" placeholder="Страна" />
        </div>
        <input type="text" placeholder="Телефон" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Итоги корзины</h2>
          <div className="cart-total-details">
            <p>Подытог</p>
            <p>{getTotalCartAmount()}$</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Стоимость доставки</p>
            <p>{getTotalCartAmount() === 0 ? 0 : 2}$</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Итого</b>
            <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}$</b>
          </div>
          <button>ПЕРЕЙТИ К ОПЛАТЕ</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
