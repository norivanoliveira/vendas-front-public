import Vue from 'vue'

export const userKey = 'HIPLDdnfkdld1234@33&%###%322334'
export const baseApiUrl = 'http://localhost:8080/ds-odonto-cloud/rest'

export function showError(e) {
    if (e && e.response && e.response.data && e.response.data.parameterViolations) {
        e.response.data.parameterViolations.forEach(element => {
            Vue.toasted.global.defaultError({ msg: element.message })
        });
    } else if (e && e.response && e.response.data) {
        Vue.toasted.global.defaultError({ msg: e.response.data })
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }