import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

export const YourForm = () => {
  const form = useForm();
  const { register, control, handleSubmit } = form;
  //   const { name, ref, onChange, onBlur } = register("username");

  const onSubmit = (data) => {
    console.log('form submited', data)
  }

  renderCount++;
  return (
    <div>
      <p>Render count is {renderCount / 2}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />
        {/* <input
          type="text"
          id="username"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        /> */}

        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
        {/* <input type="text" id="email" name="email" /> */}

        <label htmlFor="about">About</label>
        <input type="text" id="about" {...register("about")} />

        <select id="title" {...register("title")}>
          <option value="">Select an option</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
        </select>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
