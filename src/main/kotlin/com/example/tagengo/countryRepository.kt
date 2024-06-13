package com.example.tagengo

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.RowMapper
import org.springframework.stereotype.Component
import org.springframework.stereotype.Repository
import java.sql.ResultSet

@Component
class CountryRowMapper : RowMapper<country> {
    override fun mapRow(rs: ResultSet, rowNum: Int): country {
        return country(rs.getLong(1), rs.getString(2), rs.getLong(3))
//        ここでdbの1番目と2番目が何かを言っている
    }

}

@Repository
class CountryRepository(@Autowired val jdbcTemplate: JdbcTemplate, @Autowired val countryRowMapper: CountryRowMapper) {
//        val todoRowMapper = TodoRowMapper()

    fun getCountry(): Array<country> {
        val country = jdbcTemplate.query("SELECT id, name, score  FROM country", countryRowMapper)
        return country.toTypedArray()
    }

    fun userSave(userRequest: userRequest) {
        jdbcTemplate.update(" INSERT INTO users (name) VALUES(?)", userRequest.name)
    }

    fun saveScore(countryRequest: countryRequest) {
        jdbcTemplate.update("INSERT INTO score (name,score) VALUES (?,?)", countryRequest.name, countryRequest.score)
    }

    //    fun findOne(): Array<Todo> {
//        val todos = jdbcTemplate.query("SELECT id, text FROM todos WHERE id=1", todoRowMapper)
//        return todos.toTypedArray()
//    }


    fun deleteData(id: Long): String {
        jdbcTemplate.update("DELETE FROM country WHERE id = ?", id);
        return "delete"
    }
}