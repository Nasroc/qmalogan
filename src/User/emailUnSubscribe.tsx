import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface MailchimpModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  setAgreeToEmails: (value: boolean) => void;
}

const MailchimpUnsubscribeModal = ({ isOpen, setIsOpen, setAgreeToEmails }: MailchimpModalProps) => {
  const closeModal = () => setIsOpen(false);

  const handleUnsubscribe = () => {
    // Redirect to Mailchimp's unsubscribe form directly
    const unsubscribeUrl = `https://qmalogan.us10.list-manage.com/unsubscribe?u=828a2f83fe995fe70f1c80c8c&id=2b03360ec8`;

    // Open in a new tab to avoid navigating away from the site
    window.open(unsubscribeUrl, '_blank'); 

    setAgreeToEmails(false);
    closeModal();
  };

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
                  Unsubscribe from Emails
                </Dialog.Title>

                {/* Description */}
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  You’ll be redirected to our Mailchimp form to complete the unsubscribe process.
                </p>

                {/* Unsubscribe Button */}
                <div className="mt-4">
                  <button
                    onClick={handleUnsubscribe}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition"
                  >
                    Unsubscribe
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MailchimpUnsubscribeModal;
