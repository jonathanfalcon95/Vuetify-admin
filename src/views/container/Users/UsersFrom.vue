<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <base-material-card icon="mdi-account-outline">
        <template v-slot:heading>
          <v-tabs
            v-model="tabs"
            background-color="transparent"
            slider-color="white"
          >
            <span
              class="subheading font-weight-light mx-3"
              style="align-self: center"
            >  {{ getTitle }}</span>
            <v-tab class="mr-3">
              <v-icon class="mr-2">
                mdi-account
              </v-icon>
              {{ getTitleButton }}
            </v-tab>
            <v-tab class="mr-3">
              <v-icon class="mr-2">
                mdi-code-tags
              </v-icon>
              {{ $t('users.role') }}
            </v-tab>
          </v-tabs>
        </template>

        <v-card-text style="height: 100px; position: relative">
          <v-fab-transition>
            <v-btn
              fab
              dark
              small
              color="secondary"
              absolute
              right
              top
              @click="$router.go(-1)"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-card-text>
        <v-tabs-items
          v-model="tabs"
          class="transparent"
        >
          <v-tab-item>
            <v-form>
              <v-container class="py-0">
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="userData.person.email"
                      class="purple-input"
                      label="User Name"
                      :disabled="option===2?true:false"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="userData.person.email"
                      label="Email Address"
                      class="purple-input"
                      :disabled="option===2?true:false"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="userData.person.fullname"
                      label="First Name"
                      class="purple-input"
                      :disabled="option===2?true:false"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    md="6"
                  >
                    <v-text-field
                      v-model="userData.person.fullname"
                      label="Last Name"
                      class="purple-input"
                      :disabled="option===2?true:false"
                    />
                  </v-col>

                  <v-col cols="12">
                    <v-text-field
                      label="Adress"
                      class="purple-input"
                      :disabled="option===2?true:false"
                    />
                  </v-col>

                  <v-col
                    cols="12"
                    class="text-right"
                  >
                    <v-btn
                      v-if="option!==2"
                      color="success"
                      class="mr-0"
                    >
                      {{ getTitleButton }}
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-tab-item>
          <v-tab-item />
        </v-tabs-items>
      </base-material-card>
    </v-row>
  </v-container>
</template>

<script>
  import i18n from '@/i18n'
  export default {
    data: () => ({
      option: 0,
      title: '',
      userData: {
        status: '',
        status_str: '',
        person: {
          id_number: '',
          fullname: '',
          email: '',
          phone_number: '',
        },
      },
    }),
    computed: {
      getTitle () {
        if (this.option === 1) return i18n.t('users.create')
        else if (this.option === 2) return i18n.t('users.show')
        else if (this.option === 3) return i18n.t('users.edit')
        else return i18n.t('users.title')
      },
      getTitleButton () {
        if (this.option === 1) return i18n.t('crud.create')
        else if (this.option === 2) return i18n.t('crud.show')
        else if (this.option === 3) return i18n.t('crud.edit')
        else return i18n.t('users.title')
      },
    },
    mounted () {
      // console.log($t('users.title'))
      this.initialize()
    },
    methods: {
      initialize () {
        this.option = this.$route.params.option
        if (this.option === 3 || this.option === 2) {
          this.userData = this.$route.params.userData
        }

        console.log(this.title)
      },
    }, //
  }
</script>
