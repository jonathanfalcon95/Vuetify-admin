<template>
  <v-container id="data-tables" tag="section">
    <base-material-card color="indigo" icon="mdi-vuetify" inline class="px-5 py-3">
      <template v-slot:after-heading>
        <div class="display-2 font-weight-light">{{ $t('users') }}</div>
      </template>

      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        class="ml-auto"
        label="Search"
        hide-details
        single-line
        style="max-width: 250px;"
      />

      <v-divider class="mt-3" />

      <v-data-table
        :headers="headers"
        :items="items"
        :search.sync="search"
        :sort-by="['name', 'office']"
        :sort-desc="[false, true]"
        multi-sort
        class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-btn
               
                :key="1"
                color="primary"
                fab
                class="px-1 ml-1"
                x-small
                @click="editItem(item)"
              >
                <v-icon
                  small
                  v-text="'mdi-pencil'"
                />
              </v-btn>
           <v-btn
               
                :key="2"
                color="secondary"
                fab
                class="px-1 ml-1"
                x-small
                @click="editItem(item)"
              >
                <v-icon
                  small
                  v-text="'mdi-delete'"
                />
              </v-btn>
        </template>
      </v-data-table>
    </base-material-card>
  </v-container>
</template>

<script>
import { getUsers } from "@/api/modules";

export default {
  name: "DashboardDataTables",

  data: () => ({
    headers: [
      {
        text: "id",
        value: "person.id"
      },
      {
        text: "name",
        value: "person.fullname"
      },
      {
        text: "email",
        value: "person.email"
      },
      {
        text: "phone",
        value: "person.phone_number"
      },
      {
        sortable: false,
        text: "Actions",
        value: "actions"
      }
    ],
    items: [
      {
        person: {
          id: 1,
          fullname: "algo",
          email: "este@gmail.com",
          phone_number: "2323232323"
        }
      }
    ],
    search: undefined
  }),
  async mounted() {
   // await this.loadUsersData();
  },
  methods: {
    async loadUsersData() {
      console.log("mounted");
      let serviceResponse = await getUsers();
      if (serviceResponse.ok === 1) {
        console.log(serviceResponse);
        this.items = serviceResponse.data;
      } else {
        console.log(serviceResponse);
        // const params = { text: serviceResponse.message.text };
        // window.getApp.$emit("SHOW_ERROR", params);
      }
    },
    editItem(item) {
      console.log(item);
    }
  }
};
</script>
