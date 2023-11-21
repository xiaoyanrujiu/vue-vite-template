<template>
  <div>首页</div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useAuthStore } from "@/store/modules/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { setAuthRole } = authStore;
const { authRole } = storeToRefs(authStore);

onMounted(() => {
  // setAuthRole("test");
  // console.log("authRole", authRole);/
});
</script>
