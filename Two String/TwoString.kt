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
 * url: https://www.hackerrank.com/challenges/two-strings/problem
 * author: Doni apr
 */

// Complete the twoStrings function below.
fun twoStrings(s1: String, s2: String): String {
    var result = "NO"

    // get String intersection
    val a = s1.toCharArray().intersect(s2.toCharArray().asIterable())

    // check intersection is null or not
    if (!a.isNullOrEmpty()){
        result = "YES"
    }

    return result
}

fun main(args: Array<String>) {
    val scan = Scanner(System.`in`)

    val q = scan.nextLine().trim().toInt()

    for (qItr in 1..q) {
        val s1 = scan.nextLine()

        val s2 = scan.nextLine()

        val result = twoStrings(s1, s2)

        println(result)
    }
}
