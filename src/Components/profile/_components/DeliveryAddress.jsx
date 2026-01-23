import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";

// Reusable Address Card Component
const AddressCard = ({ address, onEdit, onDelete }) => {
  return (
    <div className="bg-[#6b0f12] text-[#F9EFD5] p-6 relative mb-4 rounded-lg">
      <div className="absolute  right-4 top-4 flex flex-col gap-5">
        <button 
          onClick={onEdit} 
          className="text-white flex items-center gap-2 text-sm hover:text-gray-300 transition"
          type="button"
        >
          <FaRegEdit size={19} /> 
        </button>
        <button 
          onClick={onDelete} 
          className="text-[#E7000B] flex items-center gap-2 text-sm hover:text-red-400 transition"
          type="button"
        >
          <RiDeleteBinLine size={20} /> 
        </button>
      </div>

 <div className="text-[18px] inter">
       <p className="">{address.name}</p>
      <p className=" opacity-90">{address.email}</p>
      <p className=" opacity-90">{address.phone}</p>
      <p className=" mt-2 ">{address.country}</p>
      <p className="">{address.streetAddress}</p>
      <p className="">{address.city}, {address.postcode}</p>
 </div>
      

    </div>
  );
};

// Reusable Form Input Component
const FormInput = ({ label, type = "text", register, errors, name, placeholder, required = false, validation = {} }) => {
  return (
    <div>
      <label className="text-[#5B0D0D] text-sm font-medium mb-1 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        {...register(name, { 
          required: required ? `${label} is required` : false,
          ...validation
        })}
        placeholder={placeholder}
        className={`w-full bg-[#6b0f12] placeholder:text-[#F9EFD5] text-white px-4 py-3 text-sm outline-none rounded transition ${
          errors[name] ? 'border border-red-500' : ''
        }`}
      />
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

// Reusable Form Select Component
const FormSelect = ({ label, register, errors, name, options, required = false }) => {
  return (
    <div>
      <label className="text-[#5B0D0D] text-sm font-medium mb-1 block">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        {...register(name, { required: required ? `${label} is required` : false })}
        className={`w-full bg-[#6b0f12] text-white px-4 py-3 text-sm outline-none rounded appearance-none ${
          errors[name] ? 'border border-red-500' : ''
        }`}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

// Main Component
const DeliveryAddress = () => {
  const [showAddAddress, setShowAddAddress] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Safi Mahmud",
      email: "safi412@gmail.com",
      phone: "01728583881",
      country: "UK",
      streetAddress: "Malona, Unit 7-12, Broadmoor Park, Broadmoor Road",
      city: "Gloucester",
      postcode: "GL14 2YF",
      isDefaultDelivery: true,
      isDefaultBilling: false
    }
  ]);

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    setValue 
  } = useForm();


  const handleSaveSuccess = () => {
  Swal.fire({
    title: "Saved Successfully!",
    text: "Your changes have been saved successfully.",
    icon: "success",
    confirmButtonColor: "#5B0D0D",
    confirmButtonText: "OK",
    background: "#f7eed8",
    color: "#5B0D0D",
  });
};


  const onSubmit = (data) => {
    const newAddress = {
      id: addresses.length + 1,
      ...data,
      isDefaultDelivery: data.isDefaultDelivery || false,
      isDefaultBilling: data.isDefaultBilling || false
    };
    
    setAddresses([...addresses, newAddress]);
    handleSaveSuccess()
    reset();
    setShowAddAddress(false);
  };

  const handleEditAddress = (addressId) => {
    const addressToEdit = addresses.find(addr => addr.id === addressId);
    if (addressToEdit) {
      Object.keys(addressToEdit).forEach(key => {
        setValue(key, addressToEdit[key]);
      });
      setShowAddAddress(true);
    }
  };

  const handleDeleteAddress = (addressId) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      setAddresses(addresses.filter(addr => addr.id !== addressId));
    }
  };

  return (
    <div className="w-full  bg-[#f7eed8] p-4 md:p-12">
      <div className="w-full  mx-auto">
        {!showAddAddress ? (
          <>
            {/* ADDRESS LIST */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl canela md:text-3xl font-serif text-[#6b0f12]">
                My delivery address
              </h2>
              <span className="text-[#6b0f12] text-sm">
                {addresses.length} address{addresses.length !== 1 ? 'es' : ''}
              </span>
            </div>

            <button
              onClick={() => setShowAddAddress(true)}
              className="w-full  bg-[#6b0f12] text-[#F9EFD5] inter py-5 px-6 text-[17px] flex items-center justify-center gap-2 mb-8 hover:bg-[#5a0d10] transition duration-300"
            >
              <span><IoLocationOutline size={25} /></span> ADD NEW ADDRESS
            </button>

            {/* Addresses List */}
            <div className="space-y-4">
              {addresses.map((address) => (
                <AddressCard
                  key={address.id}
                  address={address}
                  onEdit={() => handleEditAddress(address.id)}
                  onDelete={() => handleDeleteAddress(address.id)}
                />
              ))}
            </div>

            {addresses.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#6b0f12] text-lg">No addresses saved yet.</p>
                <p className="text-[#6b0f12] text-sm mt-2">Add your first address to get started.</p>
              </div>
            )}
          </>
        ) : (
          <>
            {/* ADD NEW ADDRESS FORM */}
            <div className="mb-6">
        
              
              <h2 className="text-3xl canela md:text-3xl font-serif text-[#6b0f12]">
                Add new address
              </h2>
              <p className="text-[18px] lora text-[#6b0f12] mt-2">
                Please enter an address you would like to save and deliver your items to.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
                {/* First Name */}
                <FormInput
                  label="First Name"
                  name="firstName"
                  register={register}
                  errors={errors}
                  placeholder="Enter first name"
                  required={true}
                />

                {/* Last Name */}
                <FormInput
                  label="Last Name"
                  name="lastName"
                  register={register}
                  errors={errors}
                  placeholder="Enter last name"
                  required={true}
                />
     

        
                {/* Email */}
                <FormInput
                  label="Email"
                  name="email"
                  type="email"
                  register={register}
                  errors={errors}
                  placeholder="Enter email"
                  required={true}
                  validation={{
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  }}
                />

                {/* Mobile */}
                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  register={register}
                  errors={errors}
                  placeholder="Enter phone number"
                  required={true}

                />
        

              {/* Country */}
              <FormSelect
                label="Country"
                name="country"
                register={register}
                errors={errors}
                options={[
                  { value: "UK", label: "United Kingdom" },
                  { value: "US", label: "United States" },
                  { value: "CA", label: "Canada" },
                  { value: "AU", label: "Australia" },
                  { value: "IN", label: "India" },
                ]}
                required={true}
              />

              {/* Street Address */}
              <FormInput
                label="Street Address"
                name="streetAddress"
                register={register}
                errors={errors}
                placeholder="Enter street address"
                required={true}
              />

          
                {/* City */}
                <FormInput
                  label="City"
                  name="city"
                  register={register}
                  errors={errors}
                  placeholder="Enter city"
                  required={true}
                />

                {/* Postcode */}
                <FormInput
                  label="Postcode"
                  name="postcode"
                  register={register}
                  errors={errors}
                  placeholder="Enter postcode"
                  required={true}
                />
             

              {/* Checkboxes */}
              <div className="space-y-3 text-sm lora text-[#6b0f12] p-4  rounded">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    {...register("isDefaultDelivery")}
                    className="w-4 h-4 text-[#6b0f12]"
                  />
                  <span>Set as default delivery address</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    {...register("isDefaultBilling")}
                    className="w-4 h-4 text-[#6b0f12]"
                  />
                  <span>Set as default billing address</span>
                </label>
              </div>

              {/* Form Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#6b0f12] text-white py-4 inter text-sm font-medium hover:bg-[#5a0d10] transition duration-300"
                >
                  SAVE ADDRESS
                </button>
                <button
                  type="button"
                  onClick={() => {
                    reset();
                    setShowAddAddress(false);
                  }}
                  className="flex-1 bg-gray-300 text-[#6b0f12] py-3 text-sm font-medium hover:bg-gray-400 transition duration-300"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default DeliveryAddress;