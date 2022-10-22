import { Button, Input } from '@suwilo/ui';

export const Login = () => {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Pattern"
            src="https://img.freepik.com/free-vector/gradient-galaxy-background_23-2148983655.jpg?w=2000&t=st=1666315353~exp=1666315953~hmac=7b3e31b4e1a24f9ff1f7cf37ff4caa16dab378d5638557ca7f0221fdf2ecf8f0"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        <main
          aria-label="Main"
          className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to Suwilo 🚀
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              nam dolorum aliquam, quibusdam aperiam voluptatum.
            </p>

            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <Input
                  type="password"
                  id="FirstName"
                  label="First Name"
                  placeholder="Type your first name"
                  name="first_name"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Input
                  type="text"
                  id="LastName"
                  label="Last Name"
                  placeholder="Last Name"
                  name="last_name"
                />
              </div>

              <div className="col-span-6">
                <Input type="email" id="Email" name="email" label="E-mail" />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Input
                  type="password"
                  id="Password"
                  name="password"
                  label="Password"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <Input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  label="Password Confirmation"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                  <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                  />

                  <span className="text-sm text-gray-700">
                    I want to receive emails about events, product updates and
                    company announcements.
                  </span>
                </label>
              </div>

              <div className="col-span-6">
                <p className="text-sm text-gray-500">
                  By creating an account, you agree to our
                  <a href="#" className="text-gray-700 underline mx-1">
                    terms and conditions
                  </a>
                  and
                  <a href="#" className="text-gray-700 underline ml-1">
                    privacy policy
                  </a>
                  .
                </p>
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button onClick={() => console.log('Create')}>Sign In</Button>

                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                  Already have an account?
                  <a href="#" className="text-gray-700 underline ml-1">
                    Log in
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};
