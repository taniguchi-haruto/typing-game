package com.example.tagengo

import org.hamcrest.CoreMatchers.equalTo
import org.hamcrest.MatcherAssert.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.client.TestRestTemplate
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.http.HttpStatus
import org.springframework.test.context.jdbc.Sql

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Sql("/insert_country_data.sql")
@Sql("/insert_test_score.sql")
@Sql("/insert_user_data.sql")
class TagengoApplicationTests(
    @Autowired val restTemplate: TestRestTemplate,
    @LocalServerPort val port: Int,
) {
    @Test
    fun contextLoads() {
    }

    @Test
    fun `最初のテスト`() {
        assertThat(1 + 2, equalTo(3))
    }

    @Test
    fun `GETスタバOKステータスを返す`() {
        val response = restTemplate.getForEntity("http://localhost:$port/api/country", String::class.java)
        assertThat(response.statusCode, equalTo(HttpStatus.OK))
    }
    @Test
    fun `POSTスタバOKステータスを返す`(){
        val request = countryRequest("gucchi", 20)
        val response = restTemplate.postForEntity("http://localhost:$port/api/score",request, String::class.java, Long::class.java)
        assertThat(response.statusCode, equalTo(HttpStatus.OK))

    }@Test
    fun `POSTスタバuserがはいる`(){
        val request = userRequest("gucchi")
        val response = restTemplate.postForEntity("http://localhost:$port/api/users",request, String::class.java)
        assertThat(response.statusCode, equalTo(HttpStatus.OK))
    }


}
