<template>
  <v-container
    id="data-tables"
    tag="section"
  >
    <base-material-card
      color="indigo"
      icon="mdi-account-group"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="display-2 font-weight-light">
          {{ $t("UsersRoles.TitleMsg") }}
        </div>
      </template>


      <v-dialog
        v-model="dialog"
        scrollable
        max-width="300px"
      >

        <template v-slot:activator="{ on }">
          <v-card>
            <v-card-title>
              <v-spacer />
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              />
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="items"
              :search="search"
            >
              <template v-slot:item.actions="{ item }">
                <v-btn

                  :key="2"
                  color="primary"
                  fab
                  class="px-1 ml-1"
                  x-small
                  v-on="on"
                  @click="selectItemRol(item)"
                >
                  <v-icon
                    small
                    v-text="'mdi-pencil'"
                  />
                </v-btn>
              </template>
            </v-data-table>
          </v-card>
        </template>
        <v-card>
          <v-card-title>
            {{ $t("UsersRoles.SelectRol") }}
          </v-card-title>
          <v-divider />
          <v-card-text style="height: 300px;">
            <v-radio-group
              v-model="selectedItem.rol"
              column
            >
              <v-radio
                label="Administrator"
                value="Administrator"
              />
              <v-radio
                label="Chef"
                value="Chef"
              />
              <v-radio
                label="Vendor"
                value="Vendor"
              />
            </v-radio-group>
          </v-card-text>
          <v-divider />
          <v-card-actions>
            <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
            >
              {{ $t("UsersRoles.Close") }}
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click="assignRol"
            >
              {{ $t("UsersRoles.Save") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </base-material-card>
  </v-container>
</template>

<script>
  import i18n from '@/i18n'

  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false,
        search: '',
        selectedItem: '',
        headers: [
          {
            text: i18n.t('users.id'),
            value: 'id',
          },
          {
            text: i18n.t('users.name'),
            value: 'fullname',
          },
          {
            text: i18n.t('users.email'),
            value: 'email',
          },
          {
            text: i18n.t('users.phone'),
            value: 'phone_number',
          }, {
            text: i18n.t('users.role'),
            value: 'rol',
          },
          {
            sortable: false,
            text: 'Actions',
            value: 'actions',
          },
        ],
        items: [
          {
            id: 1,
            fullname: 'algo',
            email: 'este@gmail.com',
            phone_number: '2323232323',
            rol: 'Administrator',
          }, {
            id: 2,
            fullname: 'andres',
            email: 'este2@gmail.com',
            phone_number: '33333',
            rol: 'Chef',
          },
        ],
      }
    },
    methods: {
      selectItemRol (item) {
        this.selectedItem = item
      },
      assignRol () {
        this.dialog = false
        console.log(this.selectedItem)
      },
    },
  }
</script>

<style>
#lateral .v-btn--example {
  bottom: 0;
  position: absolute;
  margin: 0 0 16px 16px;
}
</style>
