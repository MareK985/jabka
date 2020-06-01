<template>
  <div>
    <table class="table">
      <thead>
        <th>{{ $t("unit") }}</th>
        <th>
          {{ $t("season1") }} <br />
          1.3.-31.5.
        </th>
        <th>
          {{ $t("season2") }} <br />
          1.6.-31.10.
        </th>
        <th>
          {{ $t("season3") }} <br />
          1.11.-28.2.
        </th>
      </thead>
      <tbody>
        <tr>
          <th>{{ $t("app1") }}</th>
          <td>100</td>
          <td>150</td>
          <td>120</td>
        </tr>
        <tr>
          <th>{{ $t("app2") }}</th>
          <td>140</td>
          <td>180</td>
          <td>160</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
