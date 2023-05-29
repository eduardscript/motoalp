'use client'

import UserModel from "@/shared/UserModel";
import { useForm } from "react-hook-form";
import Success, { Props as SuccessProps } from "../components/sucess";
import { useState } from "react";

export default function Home() {
  const { register, handleSubmit } = useForm<UserModel>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState<SuccessProps>();

  const onSubmit = async (formData: UserModel) => {
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();

    setIsSubmitted(true);
    setData({ id: responseData.id, name: formData.name });
  };

  if (isSubmitted && data) {
    return <Success id={data.id} name={data.name} />;
  }

  return (
    <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <input id="name" className="input" type="text" {...register("name", { required: true })} />
            <label htmlFor="name" className="label">Nome</label>
        </div>
        <div className="form-group">
            <input id="location" className="input" type="text" {...register("city", { required: true })} />
            <label htmlFor="location" className="label">Localidade</label>
        </div>
        <div className="form-group">
            <input id="cardnumber" className="input" type="number" {...register("phoneNumber", { required: true })} />
            <label htmlFor="cardnumber" className="label">NIF</label>
        </div>
        <div className="form-group">
            <input id="phone-number" className="input" type="number" {...register("identityCardNumber", { required: true })} />
            <label htmlFor="phone-number" className="label">Contacto</label>
        </div>
        <div className="form-group">
            <select id="size" className="input" style={{ color: '#ccc' }} {...register("shirtSize", { required: true })} >
                <option defaultValue="NONE" >Tamanho da tshirt</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
            </select>
        </div>
        <button className="button">
            Inscrever-me
        </button>
    </form>
  );
}
