import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface MailchimpModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setAgreeToEmails: (value: boolean) => void;
  setPrevSubscription: (value: boolean) => void;
}

const MailchimpModal = ({ isOpen, setIsOpen, setAgreeToEmails, setPrevSubscription }: MailchimpModalProps) => {
  const closeModal = () => setIsOpen(false);

  

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                {/* Title */}
                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100"
                >
                  Subscribe to Our Newsletter
                </Dialog.Title>

                {/* Mailchimp Form */}
                <form
                  action="https://qmalogan.us10.list-manage.com/subscribe/post?u=828a2f83fe995fe70f1c80c8c&amp;id=2b03360ec8&amp;f_id=0092d7e3f0"
                  method="post"
                  target="_blank"
                  className="mt-4 space-y-4"
                  onSubmit={() => {
                    setAgreeToEmails(true);
                    setPrevSubscription(true);
                    closeModal();
                  }}
                >
                  {/* Email */}
                  <div className="flex flex-col">
                    <label htmlFor="mce-EMAIL" className="text-sm font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                      id="mce-EMAIL"
                      required
                      className="mt-1 px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* First Name */}
                  <div className="flex flex-col">
                    <label htmlFor="mce-FNAME" className="text-sm font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="FNAME"
                      id="mce-FNAME"
                      className="mt-1 px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col">
                    <label htmlFor="mce-LNAME" className="text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="LNAME"
                      id="mce-LNAME"
                      className="mt-1 px-3 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  {/* Hidden Field */}
                  <div aria-hidden="true" className="hidden">
                    <input
                      type="text"
                      name="b_828a2f83fe995fe70f1c80c8c_2b03360ec8"
                      tabIndex={-1}
                      value=""
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                      Subscribe
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MailchimpModal;
