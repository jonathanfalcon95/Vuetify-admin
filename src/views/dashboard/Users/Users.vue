<template>
  <v-container
    id="data-tables"
    tag="section"
  >
    <base-material-card
      color="indigo"
      icon="mdi-vuetify"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="display-2 font-weight-light">
          {{ $t('users') }}
        </div>
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
        <template v-slot:items.actions="{ items }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
        </template>
      </v-data-table>
    </base-material-card>
  </v-container>
</template>

<script>
  import { getUsers } from '@/api/modules'

  export default {
    name: 'DashboardDataTables',

    data: () => ({
      headers: [
        {
          text: 'id',
          value: 'person.id',
        },
        {
          text: 'name',
          value: 'person.fullname',
        },
        {
          text: 'email',
          value: 'person.email',
        },
        {
          text: 'phone',
          value: 'person.phone_number',
        },
        {
          sortable: false,
          text: 'Actions',
          value: 'actions',
        },
      ],
      items: [],
      search: undefined,
    }),
    async mounted () {
      await this.loadUsersData()
    },
    methods: {
      async loadUsersData () {
        console.log('mounted')
        let serviceResponse = await getUsers()
        if (serviceResponse.ok === 1) {
          console.log(serviceResponse)
          this.items = serviceResponse.data
        } else {
          console.log(serviceResponse)
        // const params = { text: serviceResponse.message.text };
        // window.getApp.$emit("SHOW_ERROR", params);
        }
      },
      editItem (item) {
        console.log(item)
      },
    },
  }
</script>
