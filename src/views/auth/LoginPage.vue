<script setup lang="ts">
import InputPassword from '@/components/common/InputPassword.vue';
import InputText from '@/components/common/InputText.vue';
import LogoBase from '@/components/common/LogoBase.vue';
import router from '@/router';
import UserServices from '@/services/users.service';
import { ToastMessageOptions } from 'primevue/toast';
import { inject } from 'vue';
import { ref } from 'vue';
import verifyUserLoggedIn from '@/utils/users/verifyUserLoggedIn.util';

const inputValue = ref({
  email: '',
  password: '',
});

const showToastInject =
  inject<(params: ToastMessageOptions) => {}>('showToast');

const submitLogin = async () => {
  try {
    const { data } = await UserServices.login({
      email: inputValue.value.email,
      password: inputValue.value.password,
      jwt: null,
      otp: null,
    });
    localStorage.setItem('user', JSON.stringify(data.data));
    if (showToastInject) {
      showToastInject({
        severity: 'success',
        detail: 'Succcessssss',
      });
    }
    router.push('/assets');
  } catch (error) {
    if (showToastInject) {
      showToastInject({
        severity: 'error',
        detail:
          'Error, failed to login. Please check your connection and try again.',
      });
    }
  }
};
</script>

<template>
  <div class="flex flex-col w-full justify-center items-center">
    <LogoBase class="mb-[22px]" />
    <h1 class="text-generalText text-[32px]">Welcome!</h1>
    <p class="text-generalText text-14px mb-[32px]">Login with email</p>
    <InputText
      v-model="inputValue.email"
      :is-required="true"
      class="mb-[12px]"
      text-field-title="Email"
    />
    <InputPassword v-model="inputValue.password" />
    <button
      @click="submitLogin"
      class="w-[420px] h-[42px] mt-[32px] bg-onFieldBackground p-[10px] text-[16px] text-buttonPrimaryText rounded-[8px]"
    >
      Login
    </button>
  </div>
</template>
