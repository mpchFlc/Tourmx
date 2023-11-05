import { Button } from "../components";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Dudas o
        <span className="text-coral-red"> Sugerencias </span>
        Contáctanos
      </h3>
      <div className="lg:max-w-[50%] w-full bg-gray-800 py-8 px-4 mx-auto max-w-screen-md rounded-lg">
            <form action="#" className="space-y-8">
                <div>
                    <label htmlFor="email" className="block mb-2 text-base font-palanquin text-gray-900 dark:text-gray-300">Tú
                        correo</label>
                    <input type="email" id="email"
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <label htmlFor="subject"
                        className="block mb-2 text-base font-palanquin text-gray-900 dark:text-gray-300">Asunto</label>
                    <input type="text" id="subject"
                        className="block p-3 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                        placeholder="Permítenos saber en que podemos apoyarte" required />
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-base font-palanquin text-gray-900 dark:text-gray-400">Tú
                        mensaje</label>
                    <textarea id="message" rows="6"
                        className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                        placeholder="Deja un comentario"></textarea>
                </div>
                <Button label="Enviar mensaje" />
            </form>
      </div>
    </section>
  );
};

export default Subscribe;
