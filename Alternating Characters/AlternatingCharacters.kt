import java.io.*
import java.math.*
import java.security.*
import java.text.*
import java.util.*
import java.util.concurrent.*
import java.util.function.*
import java.util.regex.*
import java.util.stream.*
import kotlin.collections.*
import kotlin.comparisons.*
import kotlin.io.*
import kotlin.jvm.*
import kotlin.jvm.functions.*
import kotlin.jvm.internal.*
import kotlin.ranges.*
import kotlin.sequences.*
import kotlin.text.*

/*
 * url: https://www.hackerrank.com/challenges/alternating-characters/problem
 * author: Doni apr
 */

fun alternatingCharacters(s: String): Int {
    var result = 0
    // Change string to char array
    val charArray: CharArray = s.toCharArray()
    var baseChar = charArray[0]

    // loop all char array
    for(i in 1..charArray.size-1){
        // check if current base char is same with current char in index
            // if same, result will +1
                // if not, baseChar will change to current char in index
        if (baseChar == charArray[i]){
            result++
        } else {
            baseChar = charArray[i]
        }
    }
    return result

}

fun main(args: Array<String>) {
    val q = readLine()!!.trim().toInt()

    for (qItr in 1..q) {
        val s = readLine()!!

        val result = alternatingCharacters(s)

        println(result)
    }
}
