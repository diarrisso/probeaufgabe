<template>
    <div class>
        <Modal
            title="Contact Us"
            description="send your recommendation to use the website"
            @close-modal="$emit('close-modal')"
            :modal-show="isOpen"
        >
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <InputField
                    type="text"
                    v-model="firstname"
                    name="firstName"
                    label="Vorname"
                    :error="firstNameError"
                />

                <InputField
                    type="text"
                    v-model="lastname"
                    name="lastName"
                    label="LastName"
                    :error="lastNameError"

                />

                <InputField
                    type="email"
                    v-model="email"
                    name="email"
                    label="E-Mail-Adresse"
                    :error="emailError"
                />

                <InputField
                    type="checkbox"
                    v-model="consent"
                    name="consent"
                    label="I agree to terms and conditions"
                    :error="consentError"
                />

                <button
                    type="submit"
                    class="text-center font-barlow font-light hover:font-bold cursor-pointer py-2.5 px-5 me-2 mb-2 border btn w-40 mt-4"
                    @click.prevent="onSubmit"
                >
                    {{ isLoading ? 'Loading...' : 'Submit' }}
                </button>
                <FormFeedback :formFeedback="formFeedback"/>
            </form>
        </Modal>
    </div>
</template>
<script setup lang="ts">
import InputField from "~/components/form/InputField.vue";
import FormFeedback from "~/components/form/FormFeedback.vue";
import Modal from "~/components/Modal.vue";


type FormFeedbackType = 'incomplete' | 'consent' | 'invalid' | 'success' | null;

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
})


const consent = ref(false);
const success = ref(true);
const isLoading = ref(false);
const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const formFeedback: Ref<FormFeedbackType> = ref(null);

const firstname = ref('');
const lastname = ref('');
const email = ref('');

const firstNameError = ref('');
const lastNameError = ref('');
const emailError = ref('');
const consentError = ref('');

const onSubmit = async () => {
    isLoading.value = true;
    formFeedback.value = '';


    const formData = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value
    };

    if (!formData.firstname.trim()) {
        formFeedback.value = 'incomplete';
        firstNameError.value = 'Firstname cannot be null.'
        isLoading.value = false;
        return;
    }

    if (!formData.email || !regex.test(formData.email)) {
        formFeedback.value = 'invalid';
        success.value = false;
        isLoading.value = false;
        emailError.value = 'The email address cannot be null or empty. Please provide a valid email address.';
        return;
    }


    if (!formData.lastname) {
        formFeedback.value = 'incomplete';
        isLoading.value = false;
        lastNameError.value = 'Lastname cannot be null';
        return;
    }

    if (!consent.value) {
        formFeedback.value = 'incomplete';
        isLoading.value = false;
        consentError.value = 'consent cannot be false'
        return;
    }

    setTimeout(() => {
        success.value = true;
        formFeedback.value = 'success';
        isLoading.value = false;
        lastNameError.value = '';
        emailError.value = '';
        firstNameError.value = '';
        consentError.value = '';
    }, 1000);
}

</script>
