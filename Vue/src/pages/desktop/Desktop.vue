<template>
  <div>
    <UserSpace/>
    <ChangePassword/>
  </div>
</template>

<script>
import UserSpace from "@/components/userspace/UserSpace";
import ChangePassword from "@/components/userspace/ChangePassword";
export default {
  name: "Desktop",
  components: {ChangePassword, UserSpace}
}
</script>

<style scoped>

</style>