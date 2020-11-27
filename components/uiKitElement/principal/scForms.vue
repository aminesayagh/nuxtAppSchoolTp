<template>
  <div>
    <form action="">
      <div class="sc-w-6/12 focus-within:sc-text-gray-0">
        <label class="">
          <span class="">Input</span>

          <input
            type="email"
            class="focus-visible:border-gray-10"
            placeholder="john@example.com"
          />
        </label>
      </div>
      <div class="sc-w-6/12">
        <label>
          <span class="">Requested Limit</span>
          <select class="">
            <option>$1,000</option>
            <option>$5,000</option>
            <option>$10,000</option>
            <option>$25,000</option>
          </select>
        </label>
      </div>
    </form>
  </div>
</template>


<style src="~/assets/src/tailwind.css"></style>
<script>
export default {};
</script>