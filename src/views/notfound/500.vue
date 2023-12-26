<template>
  <div class="notfound-card">
    <img :src="Error500" alt="500" />
    <a-button type="primary" @click="goHome"> 回到首页 </a-button>
  </div>
</template>
<script setup lang="ts">
import "./index.scss";
import Error500 from "@/assets/svg/500.svg";
import { useRouter } from "vue-router";

const router = useRouter();

const goHome = () => {
  router.push("/");
};
</script>
