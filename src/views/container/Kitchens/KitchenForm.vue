<template>
  <v-container
    id="data-tables"
    tag="section"
  >
    <base-material-card
      color="indigo"
      icon="mdi-coffee-maker"
      inline
      class="px-5 py-3"
    >
      <template v-slot:after-heading>
        <div class="display-2 font-weight-light">
          {{ $t(modeI18Title) }}
        </div>
      </template>

      <v-divider class="mt-3" />
      <v-form class="mt-5">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="Kitchen Name" v-model="this.itemData.fullname"/>
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="Kitchen Email" v-model="this.itemData.email" />
            </v-col>

            <v-col
              cols="12"
              md="6"
            >
              <v-text-field label="Vendor Street addres" />
            </v-col>

            <v-col
              cols="12"
              md="2"
            >
              <v-text-field label="City" />
            </v-col>

            <v-col
              cols="12"
              md="2"
            >
              <v-text-field label="State" />
            </v-col>

            <v-col
              cols="12"
              md="2"
            >
              <v-text-field label="Zip Code" />
            </v-col>

            <v-col
              cols="12"
              md="4"
            >
              <v-text-field label="Point of Contact Name" />
            </v-col>

            <v-col
              cols="12"
              md="3"
            >
              <v-text-field label="Phone number" />
            </v-col>


              <v-col
                cols="12"
                class="text-right"
              >
                <v-btn
                  color="success"
                  class="mr-0"
                >
                  Update Kitchen
                </v-btn>
              </v-col>
          </v-row>
        </v-container>
      </v-form>

      <v-btn
        class="ma-1"
        @click="onBack"
      >
        <v-icon>
          mdi-chevron-left
        </v-icon>
        {{ $t('back') }}
      </v-btn>
    </base-material-card>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      itemData:{}
    }),

    computed: {
      modeI18Title: function () {
        switch (this.$route.query.mode) {
          case 'create':
            return 'kitchens.kitchen-create'
          case 'edit':
            return 'kitchens.kitchen-edit'
          case 'show':
            return 'kitchens.kitchen-show'
          default:
            return 0
        }
      },
    },
    mounted(){
      this.itemData=this.$route.params.itemData;
      console.log(this.$route.params.itemData);
    },methods:{
      onBack(){
        this.$router.push({name:'Kitchens'})
      }
    }
  }
</script>

<style>
</style>
