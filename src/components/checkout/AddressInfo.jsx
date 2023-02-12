import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { updateAddress } from "@/reducers/checkout"
import formStyles from "@/styles/Form.module.css"

export default function Shipping({
  setShip,
  setPay,
  setBilling,
  isBilling,
  isShip,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { sameAs: false } })

  const dispatch = useDispatch()
  const router = useRouter()

  const handleForm = (data) => {
    console.log(data)

    const {
      email,
      number,
      name,
      address,
      surname,
      postal,
      city,
      province,
      country,
      sameAs,
    } = data
    if (sameAs) {
      dispatch(
        updateAddress({
          email,
          number,
          name,
          address,
          surname,
          postal,
          city,
          province,
          country,
          sameAs,
        }),
      )
      setShip(false)
      setBilling(false)
      setPay(true)
    } else if (isBilling) {
      dispatch(
        updateAddress({
          name,
          address,
          surname,
          postal,
          city,
          province,
          country,
        }),
      )
      setShip(false)
      setPay(false)
      setBilling(true)
    }
  }

  return (
    <div className="contained">
      <div className={formStyles.formHeader}>
        <div className="header">
          {isBilling ? `Billing Info` : `Delivery Info`}
        </div>
        <div className="header">2/3</div>
      </div>
      <div className={formStyles.formWrapper}>
        <form
          className={formStyles.theForm}
          onSubmit={handleSubmit((data) => handleForm(data))}
        >
          {isShip && (
            <>
              <div className={formStyles.inputGroup}>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                  placeholder="Email address*"
                />
                {errors?.email?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.email?.type === "pattern" && (
                  <p>Enter a valid email address</p>
                )}
              </div>
              <div className={formStyles.inputGroup}>
                <input
                  type={"number"}
                  {...register("number", {
                    required: true,
                    minLength: 10,
                  })}
                  placeholder="Phone number*"
                />
                {errors?.number?.type === "required" && (
                  <p>This field is required</p>
                )}
                {errors?.number?.type === "minLength" && (
                  <p>Must be atleast 10 digits</p>
                )}
              </div>{" "}
            </>
          )}
          <div className={formStyles.inputGroup}>
            <input
              {...register("name", {
                required: true,
                pattern: /^[A-Za-z]+$/i,
                maxLength: 30,
              })}
              placeholder="Name*"
            />
            {errors?.name?.type === "required" && <p>This field is required</p>}
            {errors?.name?.type === "maxLength" && (
              <p>First name cannot exceed 20 characters</p>
            )}
            {errors?.name?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
          </div>
          <div className={formStyles.inputGroup}>
            <input
              {...register("surname", { pattern: /^[A-Za-z]+$/i })}
              placeholder="Surname"
            />
            {errors?.surname?.type === "pattern" && (
              <p>Alphabetical characters only</p>
            )}
          </div>
          <div className={formStyles.inputGroup}>
            <input
              {...register("address", { required: true })}
              placeholder="Address*"
            />
            {errors?.address?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className={formStyles.inputGroup}>
            <input
              type={"number"}
              {...register("postal", { required: true })}
              placeholder="Postal code*"
            />
            {errors?.postal?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className={formStyles.inputGroup}>
            <input
              {...register("city", { required: true })}
              placeholder="City*"
            />
            {errors?.city?.type === "required" && <p>This field is required</p>}
          </div>
          <div className={formStyles.inputGroup}>
            <select {...register("province", { required: true })}>
              <option value="Gauteng">Gauteng</option>
              <option value="Mpumalanga">Mpumalanga</option>
              <option value="Limpopo">Limpopo</option>
              <option value="North West">North West</option>
              <option value="Northern Cape">Northern Cape</option>
              <option value="Eastern Cape">Eastern Cape</option>
              <option value="Kwazulu-Natal">Kwazulu-Natal</option>
              <option value="Western Cape">Western Cape</option>
              <option value="Free State">Free State</option>
            </select>
            {errors?.province?.type === "required" && (
              <p>This field is required</p>
            )}
          </div>
          <div className={formStyles.inputGroup}>
            <select {...register("country")}>
              <option value="ZA">South Africa</option>
            </select>
          </div>
          {isShip && (
            <div className={formStyles.inputGroup}>
              <input id="sameAs" type="checkbox" {...register("sameAs")} />
              <label for="sameAs">Same as billing</label>
            </div>
          )}

          <div className={formStyles.btnGroup}>
            <input type={"submit"} value="next" className="btn light" />
          </div>
        </form>
      </div>
    </div>
  )
}
